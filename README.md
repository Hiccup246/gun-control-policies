# 🇺🇸 [Gun control policies](https://www.guncontrolpolicies.com/)
![](https://img.shields.io/github/license/Hiccup246/gun-control-policies)
![](https://img.shields.io/github/issues/Hiccup246/gun-control-policies)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=gun-control-policies)

![](https://i.imgur.com/Ovik1jJ.png)

# Description
The motivation for this project was to learn about Nuxt 3 and to raise awareness about possible gun control policies. The site was is mobile friendly and designed in [Figma](https://www.figma.com/), built in [Nuxt 3 RC](https://v3.nuxtjs.org/) and deployed using [Vercel](https://vercel.com/).

Hopefully by summarising some gun control policies and collating links to gun control advocacy groups and initiatives this website contributes, in some small way, to the reduction of gun violence in America.

# Project Structure
The project is made up of 5 modules of which there are 3 components, 1 layout and 1 page with the most complex being the header component. The most important modules to understand are described below:
- `layouts/BaseLayout.vue` - This component is the entry point of the application and renders the header and footer along with a slot for page content
- `pages/index.vue` - This component represents the single page of the application and uses the `components/GunPolicy.vue` component to render the 10 policies.

# Usage
After cloning this repository, make sure to have node installed and then navigate to the root of the project and run the following commands:

1. `npm install`
2. `npm run dev`

# Futrue Improvements
- Upgrade the footer to contain links to social media gun control accounts and direct donation buttons
- Animate header when screen size is above small tablet (the gun "shoots" the bullet across the page)
- Serve fonts locally instead of importing google fonts
- Think about how to display information in a more interactive way
- Add sources to the information directly like acidemic papers do