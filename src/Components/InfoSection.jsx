import Classes from '../Styles/InfoSection.module.css';

export default function InfoSection(){
  return(
    <section className={Classes.InfoSectionContainer}>
      <div className={Classes.InfoContent}>
        <a className={Classes.InfoLink} href="mailto:contact@tanayshandilya.com">ML</a>
        <a className={Classes.InfoLink} href="https://instagram.com/tanay_shandilya">IG</a>
        <a className={Classes.InfoLink} href="https://linkedin.com/in/tanayshandilya">LI</a>
      </div>
    </section>
  )
}