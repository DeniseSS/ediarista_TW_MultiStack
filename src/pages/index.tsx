import Head from 'next/head'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/safeEnvironment';
import PageTitle from 'ui/components/data-display/pageTitle/pageTitle';

export default function Home() {
  return (
    <div>
      
      <SafeEnvironment />
      <PageTitle title={'Conheça os profissionais'} />
      <PageTitle subtitle={'Profissionais da sua localidade'}/>
    </div>
  )
}
