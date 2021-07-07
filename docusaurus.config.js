const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chapter Frontend',
  tagline: 'CashMe',
  url: 'https://rogeriocashme.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://static.cashme.com.br/logos/cashme/light-blue-no-text.svg',
  organizationName: 'rogeriocashme',
  projectName: 'rogeriocashme.github.io',
  noIndex: true,
  themeConfig: {
    navbar: {
      title: 'Chapter Frontend',
      logo: {
        alt: 'CashMe Logo',
        src: 'https://static.cashme.com.br/logos/cashme/dark-blue-no-text.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'standardization/naming-conventions',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} CashMe, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
