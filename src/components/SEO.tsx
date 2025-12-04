import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Sara Duarte | Mentoria para Mulheres",
  description = "Descubra sua verdadeira identidade, ative sua segurança e entre no seu destino. Mentoria especializada em transformação feminina com Sara Duarte.",
  keywords = "Sara Duarte, mentoria feminina, identidade feminina, transformação pessoal, autoconhecimento",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://saraduarte.com.br",
  type = "website",
}: SEOProps) => {
  const fullTitle = title.includes("Sara Duarte") ? title : `${title} | Sara Duarte`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
