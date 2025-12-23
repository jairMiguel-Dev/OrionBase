import InputIcon from '@mui/icons-material/Input';

export const lista = [
    {
        type: "básico",
        icon: <InputIcon/>,
        termo: "Material Ui",
        definicao: "Biblioteca usada para reduzir o tempo de desenvolvimento de interfaces de usuário.",
        explicacao: "Em react, o MUI vem para agilizar o processo, porem com suas semânticas próprias. Pode ser assustados, mas a curva de aprendizado é bem pequena com bastante dedicação!",
    },
    {
        type: "básico",
        icon: <InputIcon/>,
        termo: "Grid",
        definicao: "Componente do MUI que serve para criar um container.",
        explicacao: "É como se você estivesse definindo sua 'Section', mas o legal vem logo a seguir!",
        explicacao2: "O Grid, cria um espaço separado por blocos, onde cada espaço possui 12 blocos, e você pode definir quantos blocos deseja para cada elemento!",
        maincode: "<Grid container></Grid>",
    },
    {
        type: "básico",
        icon: <InputIcon/>,
        termo: "Grid Container",
        definicao: "Aqui é onde vamos empacotar todo o código dentro de um container.",
        explicacao: "Por organização e boas práticas, o Grid Container agrupa tudo dentro dele, e define como será a posição dos elementos dentro da página.",
        explicacao2: "Em caso de reduzir para uma tela menor como de celular, ele irá se adaptar automaticamente.",
        maincode: "<Grid container></Grid>",
    },
    {
        type: "básico",
        icon: <InputIcon/>,
        termo: "Typography",
        definicao: "É onde vamos criar nossos textos e definir suas propriedades como titulo ou subtitulo.",
        explicacao: "Vamos lembrar da Semântica do HTML '<p>', porem aqui definimos se o texto terá um padrão de H1, H2...",
        explicacao2: "O código fica assim:",
        maincode2: "<Typography variant='h1'>Título</Typography>",
        maincode: "<Typography variant='h1'>Título</Typography>",
    },
    {
        type: "básico",
        icon: <InputIcon/>,
        termo: "Icons",
        definicao: "Por padrão o MUI vem com um conjunto de ícones que podem ser usados para representar na página.",
        explicacao: "Para os importar, você pode buscar direto no Material UI, ou importar direto do seu repositório.",
        explicacao2: "A Importação fica assim:",
        maincode2: "import { IconName } from '@mui/icons-material/IconName';",
        maincode: "import { IconName } from '@mui/icons-material/IconName';",
    },
]