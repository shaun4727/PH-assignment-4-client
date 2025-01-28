import React, { useState } from "react";
import { Card } from "antd";
import TabCard from "./tabChild/tabCard";

const tabListNoTitle = [
  {
    key: "Biography",
    label: "BIOGRAPHY",
  },
  {
    key: "Education",
    label: "EDUCATION",
  },
  {
    key: "Mystery",
    label: "MYSTERY",
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  Biography: <TabCard />,
  Education: <TabCard />,
  Mystery: <TabCard />,
};

const TabCom: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>("Biography");

  const onTab2Change = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <>
      <Card
        className="tab-component "
        style={{ width: "100%", marginTop: "15px" }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey}
        onTabChange={onTab2Change}
        tabProps={{
          size: "middle",
        }}
      >
        {React.isValidElement(contentListNoTitle[activeTabKey]) &&
          React.cloneElement(
            contentListNoTitle[activeTabKey] as React.ReactElement,
            { activeTabKey }
          )}
        {/* {contentListNoTitle[activeTabKey]} */}
      </Card>
    </>
  );
};

export default TabCom;
