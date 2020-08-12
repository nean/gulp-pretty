import PluginError from 'plugin-error';
import through from 'through2';
import pretty from 'pretty';

/**
 * @typedef PrettyOptions
 * @prop {boolean} ocd
 * @prop {...}
 */

/**
 * @param {PrettyOptions} options
 */
export default function prettyPlugin(options) {
  return through.obj((file, enc, cb) => {
    if (file.isStream()) {
      return cb(new PluginError('@nean/gulp-pretty', 'Streaming not supported'));
    }

    if (file.isBuffer()) {
      try {
        const contents = String(file.contents);
        const compiled = pretty(contents, options);

        file.contents = Buffer.from(compiled);
      } catch (error) {
        return cb(new PluginError('@nean/gulp-pretty', error));
      }
    }

    return cb(null, file);
  });
}
