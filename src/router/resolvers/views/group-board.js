import { useGroups } from "@/state/groups.js";
import { useProjects } from "@/state/projects.js";
import { useSpaces } from "@/state/spaces.js";
import { createViewResolver } from "../view-resolver-factory.js";

export default createViewResolver(async route => {
  const spaces = useSpaces();
  const projects = useProjects();
  const groups = useGroups();

  spaces.selectSpace(+route.params.spaceID);
  projects.loadSpaceProjects(spaces.currentSpace.value);

  projects.selectProject(+route.params.projectID);
  await projects.loadProjectUsers(projects.currentProject.value);
  await groups.loadProjectGroups(projects.currentProject.value);

  groups.selectGroup(+route.params.groupID);
});