/* eslint-disable jest/valid-expect-in-promise */
import { shallowMount } from "@vue/test-utils";
import VisaMain from "@/components/specific/visa/visa-main/VisaMain.vue";
import VisaList from "@/components/specific/visa/visa-list/VisaList.vue";
import VisaAdd from "@/components/specific/visa/visa-add/VisaAdd.vue";
import VisaSummary from "@/components/specific/visa/visa-summary/VisaSummary.vue";

import {
  noDocument,
  document,
  visasLoading,
  project,
  createdVisas,
  toValidateVisas
} from "./fakeData.js";

describe("VisaMain", () => {
  test("should render VisaList component", () => {
    const wrapper = shallowMount(VisaMain, {
      props: {
        document: noDocument,
        visasLoading,
        project,
        createdVisas,
        toValidateVisas
      }
    });

    expect(wrapper.vm.currentView).toBe("visaList");
    expect(wrapper.findComponent(VisaList).exists()).toBe(true);
    expect(wrapper.vm.currentVisa).toBeFalsy();
  });

  test("should render VisaAdd component", () => {
    const wrapper = shallowMount(VisaMain, {
      props: {
        document,
        visasLoading,
        project,
        createdVisas,
        toValidateVisas
      }
    });

    expect(wrapper.vm.currentView).toBe("visaAdd");
    expect(wrapper.findComponent(VisaAdd).exists()).toBe(true);
    expect(wrapper.vm.currentVisa).toBeFalsy();
  });

  test("should render VisaSummary when reachVisa() is called", () => {
    const wrapper = shallowMount(VisaMain, {
      props: {
        document: noDocument,
        visasLoading,
        project,
        createdVisas,
        toValidateVisas
      }
    });

    const visa = { id: 1 };
    wrapper.vm.reachVisa(visa);

    expect(wrapper.vm.currentVisa).toEqual(visa);
    expect(wrapper.vm.currentView).toBe("visaSummary");

    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.findComponent(VisaSummary).exists()).toBe(true);
    });
  });

  test("should render VisaSummary when createVisa() is called", () => {
    const wrapper = shallowMount(VisaMain, {
      props: {
        document,
        visasLoading,
        project,
        createdVisas,
        toValidateVisas
      }
    });

    const visa = { id: 1 };
    wrapper.vm.createVisa(visa);

    // must find a solution to mock fetchVisa method (make the api call)
    // expect(wrapper.vm.currentVisa).toBeTruthy();
    expect(wrapper.vm.currentView).toBe("visaSummary");

    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.findComponent(VisaSummary).exists()).toBe(true);
    });
  });
});
