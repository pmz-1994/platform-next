import apiClient from "./api-client.js";

class BcfService {
  async fetchProjectTopics(project) {
    try {
      return await apiClient.bcfApi.getTopics(project.id);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTopicViewpoints(project, topic, imgFormat = "url") {
    try {
      return await apiClient.bcfApi.getTopicViewpoints(
        project.id,
        topic.guid,
        imgFormat
      );
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTopicComments(project, topic) {
    try {
      return await apiClient.bcfApi.getComments(project.id, topic.guid);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchExtensions(project) {
    try {
      return await apiClient.bcfApi.getExtensions(project.id);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchDetailedExtensions(project) {
    try {
      return await apiClient.bcfApi.getDetailedExtensions(project.id);
    } catch (error) {
      console.log(error);
    }
  }

  async importBcf(project, file) {
    try {
      const formData = new FormData();
      formData.append("name", file.name);
      formData.append("file", file);
      await fetch(
        `${process.env.VUE_APP_API_BASE_URL}/bcf/2.1/projects/${project.id}/import`,
        {
          method: "POST",
          headers: {
            ...apiClient.authHeader
          },
          body: formData
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async exportBcf(project) {
    try {
      return await apiClient.bcfApi.downloadBcfExport(project.id);
    } catch (error) {
      console.log(error);
    }
  }
}

const service = new BcfService();

export default service;
