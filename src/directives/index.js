import Vue from 'vue'

Vue.directive('focus', {
  /**
   * inserted hook: Cuando el elemento es insertado en el DOM
   * @param el {HTMLElement} El elemento al que está dirigida la directiva
   */
  inserted: function (el) {
    el.focus()
  }
})

Vue.directive('diablo', {
  /**
   * @param el {HTMLElement} Elemento al que aplica la directiva
   * @param binding {DirectiveBinding} Datos que recibe la directiva a traves de argumentos, modificadores, etc
   */
  bind (el, binding) {
    // Definimos los colores
    const color = {
      bone: '#e8dcc2',
      white: '#ffffff'
    }

    el.style.fontFamily = 'DiabloHeavy, sans-serif'

    console.log('binding')
    console.log(binding)

    const arg = binding.arg === 'bone' ? 'bone' : 'white'
    if (arg === 'bone') {
      el.style.color = color.bone
    } else {
      el.style.color = color.white
    }

    if (Object.keys(binding.modifiers).length > 0) {
      const value = binding.value || 1
      const borderExp = `${value}px solid ${color[arg]}`

      if (binding.modifiers.bottom) {
        el.style.borderBottom = borderExp
        el.style.paddingBottom = '10px'
      }
      if (binding.modifiers.top) {
        el.style.borderTop = borderExp
        el.style.paddingTop = '10px'
      }
    }
  }
})
