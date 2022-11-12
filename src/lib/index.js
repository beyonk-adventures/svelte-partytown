import { partytownSnippet } from '@builder.io/partytown/integration'
import loader from '@beyonk/async-script-loader'

/**
 * Enable partytown
 * 
 * @param {*} node The DOM element to attach the action to
 * @param {*} config partytown configuration, see https://partytown.builder.io/configuration
 */
function partytown (node, config) {
  window['partytown'] = config
  const snippet = partytownSnippet()

  loader(
    [
      { type: 'script', content: snippet }
    ],
    () => false,
    () => {}
  )
}

export {
  partytown
}
