import "./style.scss";
import AvatarGroup from "../../misc/avatar-group.svg";

export function Ajuda() {
  return (
    <section className="faq-section">
      <header>
        <h1>Perguntas frequentes</h1>
        <div className="big">Tudo o que precisa saber sobre o Mar Aberto</div>
      </header>
      <div className="perguntas-container">
        <div className="pergunta">
          <h3>Quais tipos de experiências estão disponíveis no Mar Aberto?</h3>
          <div className="medium-grey">
            O Mar Aberto oferece uma emocionante variedade de experiências
            marítimas únicas, desde passeios de barco e catamarã com guias
            experientes, aulas de caiaque, mergulho e pesca esportiva, até
            passeios de observação de golfinhos, aulas de navegação e aventuras
            aquáticas. Além disso, você pode desfrutar de românticos passeios ao
            pôr do sol, aulas de fotografia subaquática e experiências culturais
            e gastronômicas à beira-mar. A plataforma visa proporcionar opções
            diversificadas para os entusiastas do mar e da natureza, permitindo
            que escolham as atividades que melhor se alinham aos seus interesses
            e desejos de exploração marítima.
          </div>
        </div>
        <div className="line"></div>
        <div className="pergunta">
          <h3>Como posso agendar uma experiência no Mar Aberto?</h3>
          <div className="medium-grey">
            Agendar uma empolgante experiência no Mar Aberto é rápido e direto.
            Acesse o site ou o aplicativo, escolha a atividade desejada,
            selecione a data e horário disponíveis, indique o número de
            participantes, conclua a reserva com detalhes de pagamento e aguarde
            a confirmação por e-mail ou no aplicativo. Esteja pronto para
            aproveitar a aventura no dia agendado, seguindo as orientações
            fornecidas na confirmação.
          </div>
        </div>
        <div className="line"></div>
        <div className="pergunta">
          <h3>
            Posso participar das atividades mesmo sem experiência prévia em
            pesca?
          </h3>
          <div className="medium-grey">
            Sim, você pode participar das atividades oferecidas mesmo sem
            experiência prévia. Nossa plataforma é projetada para atender a uma
            ampla variedade de níveis de habilidade, desde iniciantes até
            aqueles com mais experiência. Muitas de nossas experiências são
            adequadas para pessoas que estão experimentando uma atividade
            marítima pela primeira vez.
          </div>
        </div>
        <div className="line"></div>
        <div className="pergunta">
          <h3>
            Quais são os requisitos de segurança durante as experiências no Mar
            Aberto?
          </h3>
          <div className="medium-grey">
            No Mar Aberto, a segurança dos participantes é uma prioridade
            primordial. Nossas atividades são conduzidas por instrutores e guias
            experientes, que fornecem briefing detalhado sobre medidas de
            segurança, equipamentos adequados e procedimentos de emergência
            antes do início de cada experiência. Monitoramos constantemente as
            condições meteorológicas e marítimas, reprogramando atividades se
            necessário. Além disso, mantemos nossos equipamentos e embarcações
            em estado impecável por meio de manutenção regular. Com atenção
            individualizada e ênfase na orientação, buscamos garantir que todos
            os participantes, independentemente de sua experiência anterior,
            desfrutem de nossas atividades com total confiança e tranquilidade.
          </div>
        </div>
        <div className="line"></div>
        <div className="pergunta">
          <h3>
            Quais são as políticas de cancelamento e reembolso do Mar Aberto?
          </h3>
          <div className="medium-grey paragraph">
            <p>
              As políticas de cancelamento e reembolso do Mar Aberto foram
              elaboradas para oferecer flexibilidade aos participantes enquanto
              garantem a sustentabilidade das operações. A seguir, estão algumas
              diretrizes gerais que podem se aplicar, embora detalhes específicos
              possam variar com base na atividade e na região:
            </p>
            <p>
              Cancelamento com Antecedência: Geralmente, oferecemos reembolso total ou parcial para
              cancelamentos feitos com determinada antecedência antes da data da
              atividade. Isso permite que os participantes ajustem seus planos de
              acordo com suas necessidades. 
            </p>
            <p>
              Cancelamento devido a Condições Climáticas: Em caso de condições climáticas adversas ou outras
              circunstâncias imprevistas, podemos adiar ou cancelar atividades
              para garantir a segurança dos participantes. Nesses casos, é
              provável que ofereçamos reagendamento ou reembolso completo.
              Reagendamento: Em muitos casos, permitimos que os participantes
              reagendem a atividade para uma data futura, sujeito à
              disponibilidade. Isso oferece flexibilidade caso ocorram mudanças
              nos planos dos participantes. 
            </p>
            <p>
              Não Comparecimento: Em situações de
              não comparecimento (no-show), normalmente não é possível oferecer
              reembolso, pois os recursos e equipamentos são reservados
              antecipadamente. 
            </p>
            <p>
              Política Específica da Atividade: Algumas
              atividades podem ter políticas de cancelamento específicas devido a
              considerações como capacidade limitada, equipamentos especiais ou
              custos prévios incorridos.
            </p>
            <p>
              Solicitação de Cancelamento: Os participantes geralmente precisam solicitar cancelamentos por meio
              do sistema de reservas, do site ou do aplicativo. As solicitações
              devem seguir as diretrizes especificadas para se qualificar para
              reembolso ou reagendamento.
            </p>
            <p>
              É importante ler cuidadosamente as
              políticas de cancelamento e reembolso associadas a cada atividade
              antes de fazer a reserva. Isso permitirá que você compreenda
              completamente os termos e tome decisões informadas em relação aos
              seus planos. No Mar Aberto, buscamos oferecer uma experiência
              positiva e justa para todos os participantes, considerando tanto a
              flexibilidade quanto a sustentabilidade das operações.
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="pergunta">
          <h3>
            Quais são os tamanhos de grupo disponíveis para as experiências no
            Mar Aberto?
          </h3>
          <div className="medium-grey">
            No Mar Aberto, buscamos acomodar diferentes tamanhos de grupos para
            garantir que todos possam desfrutar das nossas experiências
            marítimas. Os tamanhos de grupo disponíveis podem variar com base na
            atividade específica e na capacidade da embarcação ou instalações.
            Geralmente, oferecemos opções para grupos de diferentes tamanhos,
            desde experiências mais intimistas até atividades que podem acomodar
            grupos maiores.
          </div>
        </div>
      </div>
      <div className="ainda-tem-perguntas-container">
        <img draggable="false" src={AvatarGroup} alt="" />
        <h2>Ainda tem perguntas?</h2>
        <div className="medium-grey">
          Entre em contato com nosso suporte para tirar suas dúvidas
        </div>
        <button>Suporte Mar Aberto</button>
      </div>
    </section>
  );
}
