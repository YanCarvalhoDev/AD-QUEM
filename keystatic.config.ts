import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    artigos: collection({
      label: "Artigos",
      slugField: "title",
      path: "src/content/artigos/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Título do Artigo",
            description: "Usado também na URL (slug gerado automaticamente)",
          },
        }),
        subtitle: fields.text({
          label: "Subtítulo / Linha de Apoio",
          description: "Aparece logo abaixo do título principal no artigo",
        }),
        category: fields.relationship({
          label: "Categoria",
          collection: "categorias",
          description: "Selecione a categoria deste artigo",
        }),
        date: fields.date({
          label: "Data de Publicação",
          defaultValue: { kind: "today" },
        }),
        readingTime: fields.text({
          label: "Tempo de Leitura",
          defaultValue: "5 mins",
          description: "Ex: 10 mins, 5 mins",
        }),
        authors: fields.array(
          fields.relationship({
            label: "Autor",
            collection: "autores",
          }),
          {
            label: "Autores do Artigo",
            description: "Selecione um ou mais autores para esta publicação",
            itemLabel: (props) => props.value || "Selecionar autor...",
          },
        ),
        heroImage: fields.object({
          src: fields.image({
            label: "Imagem Hero",
            directory: "src/assets/images/artigos",
            publicPath: "../../assets/images/artigos/", // 🌟 Corrigido para caminhos relativos
          }),
          alt: fields.text({ label: "Texto Alternativo" }),
        }),
        quote: fields.text({
          label: "Citação Inicial (em destaque)",
          multiline: true,
          description: "Texto em itálico com borda à esquerda",
        }),
        content: fields.document({
          label: "Conteúdo Principal do Artigo",
          images: {
            directory: "src/assets/images/artigos",
            publicPath: "../../assets/images/artigos/", // 🌟 Corrigido para caminhos relativos
          },
          formatting: {
            headingLevels: [2, 3, 4, 5, 6],
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
              code: true,
            },
            listTypes: { ordered: true, unordered: true },
            blockTypes: { blockquote: true, code: true },
            softBreaks: true,
          },
          dividers: true,
          links: true,
        }),
        perguntasRapidas: fields.array(
          fields.object({
            pergunta: fields.text({
              label: "Pergunta",
              description: "Ex: Qual o prazo para entrar com essa ação?",
            }),
            resposta: fields.text({
              label: "Resposta",
              multiline: true,
              description: "Escreva uma resposta direta e explicativa.",
            }),
          }),
          {
            label: "Perguntas Rápidas (FAQ do Artigo)",
            description:
              "Adicione perguntas e respostas complementares fora do texto principal",
            itemLabel: (props) =>
              props.fields.pergunta.value || "Nova pergunta...",
          },
        ),
        specialistNote: fields.object({
          title: fields.text({
            label: "Título da Nota",
            defaultValue: "Nota da Especialista",
          }),
          content: fields.text({ label: "Conteúdo da Nota", multiline: true }),
          linkText: fields.text({
            label: "Texto do Link",
            defaultValue: "Agendar Consulta",
          }),
          linkUrl: fields.text({
            label: "URL do Link",
            defaultValue: "https://wa.me/5574988248384",
          }),
        }),
        podcastText: fields.text({
          label: "Chamada de Podcast",
          description:
            "Deixe em branco se este artigo não possuir uma versão em áudio",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
      },
    }),
    categorias: collection({
      label: "Categorias",
      slugField: "name",
      path: "src/content/categorias/*",
      schema: {
        name: fields.slug({ name: { label: "Nome da Categoria" } }),
        description: fields.text({
          label: "Descrição da Categoria (Opcional)",
        }),
      },
    }),
    // autores: collection({
    //   label: "Autores",
    //   slugField: "name",
    //   path: "src/content/autores/*",
    //   schema: {
    //     name: fields.slug({ name: { label: "Nome do Autor" } }),
    //     role: fields.text({
    //       label: "Cargo / Especialidade",
    //       defaultValue: "Advogada Especialista",
    //     }),
    //     image: fields.image({
    //       label: "Foto do Autor",
    //       directory: "src/assets/images/autores",
    //       publicPath: "../../assets/images/autores/", // 🌟 Corrigido para caminhos relativos
    //     }),
    //   },
    // }),
    autores: collection({
      label: "Autores",
      slugField: "name",
      path: "src/content/autores/*",
      schema: {
        name: fields.slug({ name: { label: "Nome do Autor" } }),
        role: fields.text({
          label: "Cargo / Especialidade",
          defaultValue: "Advogado Especialista",
        }),
        oab: fields.text({
          label: "Inscrição OAB (Opcional)",
        }),
        site: fields.text({
          label: "Link do Site",
        }),
        image: fields.image({
          label: "Foto do Autor",
          directory: "src/assets/images/autores",
          publicPath: "../../assets/images/autores/",
        }),
        bio: fields.text({
          label: "Biografia Curta",
          multiline: true,
        }),
        knowsAbout: fields.array(
          fields.text({ label: "Tópico de Especialidade" }),
          {
            label: "Especialidades (knowsAbout)",
            description:
              "Adicione tópicos que o autor domina. Ex: Inteligência Artificial, Direito Digital, LGPD.",
            itemLabel: (props) => props.value || "Nova especialidade",
          },
        ),
        whatsapp: fields.text({
          label: "WhatsApp (Apenas números com DDD)",
          description: "Exemplo: 11999999999 (Não use espaços ou traços)",
        }),
        instagram: fields.text({
          label: "Link do Instagram",
        }),
        email: fields.text({
          label: "E-mail de Contato",
        }),
        jusbrasil: fields.text({
          label: "Link da bio do Jusbrasil",
        }),
        linkedin: fields.text({
          label: "Link do LinkedIn",
        }),
        cnpq: fields.text({
          label: "Link do Lattes (CNPQ)",
        }),
        tiktok: fields.text({
          label: "Link do Tiktok",
        }),
        twitter: fields.text({
          label: "Link do X",
        }),
        threads: fields.text({
          label: "Link do Threads",
        }),
        facebook: fields.text({
          label: "Link do Facebook",
        }),
        youtube: fields.text({
          label: "Link do Youtube",
        }),

        featured: fields.checkbox({
          label: "Autor em Destaque?",
          defaultValue: false,
        }),
      },
    }),
  },
});
