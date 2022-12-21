# 🇺🇸 [Gun control policies](https://www.guncontrolpolicies.com/)
![](https://img.shields.io/github/license/Hiccup246/gun-control-policies)
![](https://img.shields.io/github/languages/code-size/Hiccup246/gun-control-policies)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=gun-control-policies)

![](https://raw.githubusercontent.com/Hiccup246/gun-control-policies/main/assets/imgs/site-screenshot.webp)

# Description
The motivation for this project was to learn about Nuxt 3 and to raise awareness about possible gun control policies. The site was is mobile friendly and designed in [Figma](https://www.figma.com/), built in [Nuxt 3](https://nuxt.com) and deployed using [Vercel](https://vercel.com/).

Hopefully by summarising some gun control policies and collating links to gun control advocacy groups and initiatives this website contributes, in some small way, to the reduction of gun violence in America.

# Project Structure
The project is made up of 5 modules of which there are 3 components, 1 layout and 1 page with the most complex being the header component. The most important modules to understand are described below:
- `layouts/BaseLayout.vue` - This component is the entry point of the application and renders the header and footer along with a slot for page content
- `pages/index.vue` - This component represents the single page of the application and uses the `components/GunPolicy.vue` component to render the 10 policies.

# Usage
After cloning this repository, make sure to have node installed (this project uses [NVM](https://github.com/nvm-sh/nvm) to manage node versions) and then navigate to the root of the project and run the following commands:

1. `pnpm install`
3. `pnpm run dev`

# Information Sources
The majority of the information in this site came from a youtube video by David Pakman which can be found [here](https://www.youtube.com/watch?v=UZF80B7O9Vc&ab_channel=DavidPakmanShow). Alongside the video I found additional information for some of the policies from the following sites:
1. Gun Show Loophole-https://giffords.org/lawcenter/gun-laws/policy-areas/gun-sales/gun-shows/
2. Universal background checks-https://giffords.org/lawcenter/gun-laws/policy-areas/background-checks/universal-background-checks/
        https://www.everytown.org/what-is-the-background-check-loophole/
3. Increase Mandatory Waiting Periods-https://www.aap.org/en/advocacy/state-advocacy/waiting-periods-for-firearms-purchases/
4. Age Restrict High Capacity Firearms-https://www.rand.org/research/gun-policy/analysis/minimum-age.html


# Futrue Improvements
- Animate header when screen size is above small tablet (the gun "shoots" the bullet across the page)
- Add sources to the information directly like acidemic papers do
- Store readme assets in github and reference via raw content