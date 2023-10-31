import uber from '../../../../../assets/uber.png'
import Logo from '../../../../../assets/logo.png'
import plansul from '../../../../../assets/plansul.jpg'
import { WorkContainer, Content, Imag, CardWork } from './styles'
import { projectAnimation } from '../../../../../lib/animations'
import { motion } from 'framer-motion'

export function WorkCard() {
  return (
    <motion.div {...projectAnimation} transition={{ duration: 0.7 }}>
      <WorkContainer>
        <Content>
          <Imag>
            <img src={Logo} alt="Minha Logo" />
            <div className="line"></div>
          </Imag>

          <CardWork>
            <h4>@ Autônomo</h4>
            <h3>Desenvolvedor FullStack</h3>
            <span> Set 2022 • (o momento) </span>
            <p>
              Implementacao de landing pages seguindo design do figma.
              Manutenções corretivas em aplicações react (styled components,
              redux toolkit, tailwind) Integração e desenvolvimento de apis em
              NodeJS. Stacks: React.Js, Typescript, Styled Components,
              TailwindCSS, Redux toolkit, Material ui, Express.Js, Nest.Js,
              Mysql, Mongodb, Git.
            </p>
          </CardWork>
        </Content>

        <Content>
          <Imag>
            <img src={uber} alt="uber" />
            <div className="line"></div>
          </Imag>

          <CardWork>
            <h4>@ Uber</h4>
            <h3>Motorista</h3>
            <span> Oct 2022 • (4 anos) </span>
            <p>
              Trabalhei durante 4 anos e 5 meses como motorista de aplicativo.
              Foi uma experiência em tanto, a convivência diariamente com
              diversos tipos de pessoas me fez ter mais empatia pelo próximo.
            </p>
          </CardWork>
        </Content>

        <Content>
          <Imag>
            <img src={plansul} alt="plansul" />
            <div className="line"></div>
          </Imag>

          <CardWork>
            <h4>@ Plansul</h4>
            <h3>Atendente de Telemarketing</h3>
            <span> Mar 2014 • (7 meses) </span>
            <p>
              Empresa de telemarketing terceirizada pelo Banco da Caixa
              Econômica, que tinha o intuito de auxiliar funcionários do banco
              em problemas técnicos relacionados aos produtos internos do banco
              como fies, fgts, certificado digital entre outros.
            </p>
          </CardWork>
        </Content>
      </WorkContainer>
    </motion.div>
  )
}
