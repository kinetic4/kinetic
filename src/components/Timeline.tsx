import { TimelineUi } from "./ui/Timeline";

export function Timeline() {
  const data = [
    {
      title: "Shaping Kinetic Collectively",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4 text-black">
            <p className="font-robert-regular">Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations</p>
          </div>
        </div>
      ),
    },
    {
      title: "Unlocking Economic Opportunity",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-robert-regular">ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Sharing Value Accrued",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-robert-regular">ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment and economic activities.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Decentralized Governance",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-robert-regular">Community-driven decision-making process where ZENT holders have a direct say in the platform's strategic directions and development.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Ecosystem Expansion",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-robert-regular">Continuous growth of the Zentry ecosystem, bringing in new partnerships, innovative projects, and expanding the utility of ZENT.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Global Accessibility",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-robert-regular">Breaking down barriers and creating a truly global platform that enables participation from anywhere in the world.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Technological Innovation",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-robert-regular">Leveraging cutting-edge blockchain and web3 technologies to create a seamless, secure, and transparent ecosystem.</p>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="w-full">
      <TimelineUi data={data} />
    </div>
  );
}