import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      ssr: {
			  noExternal: [ /*'dayjs'*/ ],
      },
      optimizeDeps: {
        include: [
          /*
				  'ace-builds/src-noconflict/ace',
				  'ace-builds/src-noconflict/ext-searchbox',
				  'ace-builds/src-noconflict/mode-json',
				  'ajv',
				  'classnames',
				  'debug',
				  'diff-sequences',
				  'json-source-map',
				  'natural-compare-lite',
          */
        ],
      },
		  },
  },
}

export default config