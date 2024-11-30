import { TimelineUi } from "./ui/Timeline"

export function Timeline() {
  const data = [
    {
      title: "Shaping Zentry Collectively",
      content: (
        <p>
          Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations
        </p>
      ),
    },
    {
      title: "Unlocking Economic Opportunity",
      content: (
        <p>
          ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem.
        </p>
      ),
    },
    {
      title: "Sharing Value Accrued",
      content: (
        <p>
          ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment and economic activities.
        </p>
      ),
    },
    {
      title: "Decentralized Governance",
      content: (
        <p>
          Community-driven decision-making process where ZENT holders have a direct say in the platform's strategic directions and development.
        </p>
      ),
    },
    {
      title: "Ecosystem Expansion",
      content: (
        <p>
          Continuous growth of the Zentry ecosystem, bringing in new partnerships, innovative projects, and expanding the utility of ZENT.
        </p>
      ),
    },
    {
      title: "Global Accessibility",
      content: (
        <p>
          Breaking down barriers and creating a truly global platform that enables participation from anywhere in the world.
        </p>
      ),
    },
    {
      title: "Technological Innovation",
      content: (
        <p>
          Leveraging cutting-edge blockchain and web3 technologies to create a seamless, secure, and transparent ecosystem.
        </p>
      ),
    }
  ]

  return (
    <div className="w-full">
      <TimelineUi data={data} />
    </div>
  )
}

