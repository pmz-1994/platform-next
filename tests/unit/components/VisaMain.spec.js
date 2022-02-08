// import { createI18n } from 'vue-i18n'
import i18n from "@/i18n/index.js";
import { mount } from '@vue/test-utils'

import VisaMain from '@/components/specific/visa/visa-main/VisaMain.vue'
import VisaList from '@/components/specific/visa/visa-list/VisaList.vue'
import { noDocument, document, visasLoading, project, createdVisas, toValidateVisas } from './fakeData.js'

describe('VisaMain', () => {

  test('true should be true', () => {
    expect(true).toBe(true)
  })

  test('render component', () => {
    const wrapper = mount(VisaMain, {
      props: {
        document: noDocument,
        visasLoading,
        project,
        createdVisas,
        toValidateVisas
      },
      global: {
        plugins: [i18n]
      }
    })

    expect(wrapper.vm.currentView).toBe('visaList')

    const VisaListComponent = wrapper.findComponent(VisaList)
    expect(VisaListComponent.exists()).toBe(true)


    


  })
})


// expect(wrapper.find('button').isVisible()).toBe(true)
// expect(wrapper.html()).toContain('<button>Im a button</button>')

// test click and find text in dom

// await wrapper.find('button').trigger('click')
// const randomNumber = parseInt(wrapper.find('span').text())
// expect(randomNumber).toBeGreaterThanOrEqual(1)