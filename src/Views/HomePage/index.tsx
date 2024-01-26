import ChooseView from './ChooseView'
import FrontView from './FrontView'
import ProjectsView from './ProjectsView'
import ServicesView from './ServicesView'

export function Index() {
  return (
    <>
      <FrontView />
      <ServicesView />
      <ChooseView />
      <ProjectsView />
    </>
  )
}