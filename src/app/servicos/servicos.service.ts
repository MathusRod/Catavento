import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  conteudos = [
    { img: '../../assets/imgs/img1.png', texto: 'Gestão de Resíduos' },
    { img: '../../assets/imgs/img2.png', texto: 'Sistema de Gestão Ambiental' },
    { img: '../../assets/imgs/img3.png', texto: 'Outorga de Poço' },
    { img: '../../assets/imgs/img4.png', texto: 'Licenças e Autorizações Ambientais' },
    { img: '../../assets/imgs/img5.png', texto: 'Relatório de Emissões Atmosféricas' },
    { img: '../../assets/imgs/img6.png', texto: 'Consultoria Personalizada' }
  ];
  servicos =[
    {titulo: 'Gestão de Resíduos', paragrafo: 'O Plano de Gerenciamento de Resíduos é um documento técnico que indica aforma ambientalmente correta para o manejo dos resíduos da sua geração até a suadisposição final. A elaboração e a execução do PGR são obrigatórias aos geradoresde resíduos sólidos. Tornando-se obrigatória a vinculação da aprovação destedocumento à análise dos pedidos de alvará de funcionamento, construção, reformaou reparo, registro sanitário, licença ambiental e autorização para demolição oucorte de vegetação arbórea.'},
    {titulo: 'Sistema de Gestão Ambiental', paragrafo: 'A implementação de um SGA constitui a estratégia para que o empresário, em um processo contínuo, identifique oportunidades de melhorias que reduzem os gastos financeiros do empreendedor com recursos e melhoram, simultaneamente, os impactos das atividades da empresa sobre o meio ambiente.'},
    {titulo: 'Outorga de Poço', paragrafo: 'A outorga de poço é fundamental para que se possa captar e utilizar a águaproveniente de poços artesianos e semi-artesianos por pessoas físicas ou jurídicas.Caso o procedimento não seja realizado, o responsável pode ser multado pelofuncionamento ilegal do poço, levando a um prejuízo que acaba sendo superior aovalor do processo de outorga em si. Por tanto, a utilização da água é direito detodos, mas deve seguir o processo de autorização para que esse recurso natural semantenha existente por muito mais tempo.'},
    {titulo: 'Licenças e Autorizações Ambientais', paragrafo: `Alvará de funcionamento; Consulta de Adequabilidade Locacional; Licença Sanitária; Licença Sonora; Licença de Publicidade e Propaganda.`},
    {titulo: 'Relatório de Emissões Atmosféricas', paragrafo: 'Os poluentes gasosos que são lançados diretamente na atmosfera são dispersos causando sérios problemas de saúde humana e ambiental. Esses problemas atingem tanto a comunidade do entorno do estabelecimento poluidor quanto o próprio poluidor, pois uma vez disperso na atmosfera se torna inviável a tomada de medidas corretivas. Torna-se, portanto, evidente a necessidade do monitoramento de emissões atmosféricas para empresas e processos que visam a produção de bens e serviços.'},
    {titulo: 'Consultoria Personalizada', paragrafo: 'Nós da Catavento Consultoria Jr. estamos preparados para atender as suas dificuldades e a transformá-las em possibilidades com um preço justo, aliado ao profissionalismos e sustentabilidade, com um custo abaixo do valor do mercado!  Auxiliamos na interpretação e cumprimento da legislação ambiental, identificando e mitigando os riscos ambientais associados a suas atividades, permitindo que o seu negócio esteja em conformidade com a legislação vigente.'},
  ]
  constructor() { }

  getConteudos(){
    return this.conteudos
  }
  getServicos(){
    return this.servicos
  }
}
