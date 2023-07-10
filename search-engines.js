// Cabeçalho do Google (GoogleBot)
var googleBotMetaTags = document.createElement('meta');
googleBotMetaTags.name = 'googlebot';
googleBotMetaTags.content = 'index,follow';
document.head.appendChild(googleBotMetaTags);

var googleBotRobotsMetaTags = document.createElement('meta');
googleBotRobotsMetaTags.name = 'robots';
googleBotRobotsMetaTags.content = 'index,follow';
document.head.appendChild(googleBotRobotsMetaTags);

var googleBotNoArchiveMetaTags = document.createElement('meta');
googleBotNoArchiveMetaTags.name = 'googlebot';
googleBotNoArchiveMetaTags.content = 'noarchive';
document.head.appendChild(googleBotNoArchiveMetaTags);

var googleBotReferrerMetaTags = document.createElement('meta');
googleBotReferrerMetaTags.name = 'referrer';
googleBotReferrerMetaTags.content = 'origin';
document.head.appendChild(googleBotReferrerMetaTags);

// Cabeçalho do Facebook (Facebook Crawler)
var facebookMetaTags = document.createElement('meta');
facebookMetaTags.property = 'og:title';
facebookMetaTags.content = 'Título da página';
document.head.appendChild(facebookMetaTags);

var facebookDescriptionMetaTags = document.createElement('meta');
facebookDescriptionMetaTags.property = 'og:description';
facebookDescriptionMetaTags.content = 'Descrição da página';
document.head.appendChild(facebookDescriptionMetaTags);

var facebookUrlMetaTags = document.createElement('meta');
facebookUrlMetaTags.property = 'og:url';
facebookUrlMetaTags.content = 'URL da página';
document.head.appendChild(facebookUrlMetaTags);

var facebookImageMetaTags = document.createElement('meta');
facebookImageMetaTags.property = 'og:image';
facebookImageMetaTags.content = 'URL da imagem';
document.head.appendChild(facebookImageMetaTags);

var facebookImageAltMetaTags = document.createElement('meta');
facebookImageAltMetaTags.property = 'og:image:alt';
facebookImageAltMetaTags.content = 'Descrição da imagem';
document.head.appendChild(facebookImageAltMetaTags);

var facebookImageWidthMetaTags = document.createElement('meta');
facebookImageWidthMetaTags.property = 'og:image:width';
facebookImageWidthMetaTags.content = 'largura da imagem em pixels';
document.head.appendChild(facebookImageWidthMetaTags);

var facebookImageHeightMetaTags = document.createElement('meta');
facebookImageHeightMetaTags.property = 'og:image:height';
facebookImageHeightMetaTags.content = 'altura da imagem em pixels';
document.head.appendChild(facebookImageHeightMetaTags);

var facebookTypeMetaTags = document.createElement('meta');
facebookTypeMetaTags.property = 'og:type';
facebookTypeMetaTags.content = 'website';
document.head.appendChild(facebookTypeMetaTags);

// Cabeçalho do Instagram (Instagram Crawler)
var instagramMetaTags = document.createElement('meta');
instagramMetaTags.property = 'og:title';
instagramMetaTags.content = 'Título da página';
document.head.appendChild(instagramMetaTags);

var instagramDescriptionMetaTags = document.createElement('meta');
instagramDescriptionMetaTags.property = 'og:description';
instagramDescriptionMetaTags.content = 'Descrição da página';
document.head.appendChild(instagramDescriptionMetaTags);

var instagramUrlMetaTags = document.createElement('meta');
instagramUrlMetaTags.property = 'og:url';
instagramUrlMetaTags.content = 'URL da página';
document.head.appendChild(instagramUrlMetaTags);

var instagramImageMetaTags = document.createElement('meta');
instagramImageMetaTags.property = 'og:image';
instagramImageMetaTags.content = 'URL da imagem';
document.head.appendChild(instagramImageMetaTags);

var instagramImageWidthMetaTags = document.createElement('meta');
instagramImageWidthMetaTags.property = 'og:image:width';
instagramImageWidthMetaTags.content = 'largura da imagem em pixels';
document.head.appendChild(instagramImageWidthMetaTags);

var instagramImageHeightMetaTags = document.createElement('meta');
instagramImageHeightMetaTags.property = 'og:image:height';
instagramImageHeightMetaTags.content = 'altura da imagem em pixels';
document.head.appendChild(instagramImageHeightMetaTags);

var instagramTypeMetaTags = document.createElement('meta');
instagramTypeMetaTags.property = 'og:type';
instagramTypeMetaTags.content = 'website';
document.head.appendChild(instagramTypeMetaTags);

// Cabeçalho do Yahoo (Yahoo Slurp)
var yahooRobotsMetaTags = document.createElement('meta');
yahooRobotsMetaTags.name = 'robots';
yahooRobotsMetaTags.content = 'index,follow';
document.head.appendChild(yahooRobotsMetaTags);