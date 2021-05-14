export const formSchema = [
  {
    inputType: 'text',
    name: 'unidade',
    title: 'UNIDADE RESPONSÁVEL',
    placeholder: '',
    required: true
  },
  {
    inputType: 'select',
    name: 'tipoOcorr',
    title: 'Tipo de Ocorrência',
    placeholder: '',
    options: [
      { value: '40', label: 'AMEAÇA' },
      { value: '81', label: 'ATO / ESCRITO / OBJETO OBSCENO' },
      { value: '100', label: 'APROPRIAÇÃO INDÉBITA' },
      { value: '101', label: 'DANO / DEPREDAÇÃO' },
      { value: '102', label: 'ESTELIONATO / FRAUDE' },
      { value: '107', label: 'POSSE / INVASÃO DE PROPRIEDADE' },
      { value: '141', label: 'CALUNIA / DIFAMAÇÃO / INJURIA' },
      { value: '142', label: 'CONSTRANGIMENTO ILEGAL' },
      { value: '146', label: 'VIAS DE FATO / RIXA' },
      { value: '147', label: 'VIOLAÇÃO DE DOMICÍLIO' },
      { value: '161', label: 'PERTURBAÇÃO DO SOSSEGO / TRANQUILIDADE PÚBLICA' },
      { value: '183', label: 'DESACATO' },
      {
        value: '222',
        label: 'FAZER COBRANÇA DE DIVIDAS DE MANEIRA AMEAÇADORA'
      },
      { value: '240', label: 'FALSA IDENTIDADE / FALSIDADE IDEOLÓGICA ' },
      { value: '280', label: 'ACIDENTE DE TRÂNSITO SEM VÍTIMA' },
      { value: '300', label: 'EXTRAVIO' },
      { value: '310', label: 'CRIMES CONTRA AS RELAÇÕES DE CONSUMO' },
      {
        value: '313',
        label: 'EXERCÍCIO ILEGAL DA MEDICINA, ARTE DENTÁRIA OU FARMACÊUTICA'
      },
      { value: '320', label: 'CRUELDADE CONTRA ANIMAIS' },
      { value: '321', label: 'EXERCÍCIO ARBITRÁRIO DAS PRÓPRIAS RAZÕES' },
      { value: '334', label: 'VIAS DE FATO' },
      { value: '336', label: 'CALÚNIA' },
      { value: '337', label: 'DIFAMAÇÃO' },
      { value: '346', label: 'DESENTENDIMENTO/DISCUSSÃO' },
      { value: '356', label: 'INJURIA QUALIFICADA RACIAL' },
      { value: '359', label: 'ROUBO A TRANSEUNTE' },
      { value: '360', label: 'ROUBO A ÔNIBUS' },
      { value: '361', label: 'ROUBO A OUTROS TRANSPORTES COLETIVOS' },
      { value: '362', label: 'ROUBO EM RESIDÊNCIA' },
      {
        value: '363',
        label: 'ROUBO EM ESTABELECIMENTO COMERCIAL OU DE SERVIÇOS'
      },
      { value: '365', label: 'ROUBO A OUTRAS INSTITUIÇÕES FINANCEIRAS' },
      { value: '366', label: 'ROUBO (SAÍDA DE BANCO/INSTITUIÇÃO FINANCEIRA)' },
      { value: '369', label: 'OUTROS ROUBOS' },
      { value: '370', label: 'FURTO A TRANSEUNTE' },
      { value: '371', label: 'FURTO EM RESIDÊNCIA' },
      {
        value: '372',
        label: 'FURTO EM ESTABELECIMENTO COMERCIAL OU DE SERVIÇOS'
      },
      { value: '374', label: 'FURTO A OUTRAS INSTITUIÇÕES FINANCEIRAS' },
      { value: '376', label: 'FURTO (SAÍDA DE BANCO/INSTITUIÇÃO FINANCEIRA)' },
      { value: '378', label: 'OUTROS FURTOS' },
      { value: '382', label: 'AMEAÇA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR' },
      { value: '384', label: 'CALÚNIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR' },
      { value: '388', label: 'DIFAMAÇÃO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR' },
      { value: '395', label: 'INJÚRIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR' },
      {
        value: '404',
        label: 'DIFERENÇA DE FLUXO  CAIXA EM INST. FIN. OU TRANSP DE VALORES'
      },
      { value: '416', label: 'INVASÃO DE DISPOSITIVO INFORMÁTICO' },
      {
        value: '499',
        label: 'CÁRCERE PRIVADO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR'
      },
      { value: '491', label: 'DESCUMPRIMENTO DE MEDIDA PROTETIVA DE URGÊNCIA' }
    ]
  },
  {
    inputType: 'text',
    name: 'endereco',
    title: 'Endereço da ocorrência',
    placeholder: '',
    required: true
  },
  {
    inputType: 'date',
    name: 'dataFato',
    title: 'Data do fato',
    placeholder: '',
    required: true
  }

  /**Dados Pessoais da vitima */
]
