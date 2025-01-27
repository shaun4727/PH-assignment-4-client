import React, { useState } from "react";
import { Card } from "antd";
import TabCard from "./tabChild/tabCard";

const tabListNoTitle = [
  {
    key: "article",
    label: "ARTICLE",
  },
  {
    key: "app",
    label: "APP",
  },
  {
    key: "project",
    label: "PROJECT",
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  article: <TabCard />,
  app: <TabCard />,
  project: <TabCard />,
};

const TabCom: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>("app");

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
        {contentListNoTitle[activeTabKey]}
      </Card>
    </>
  );
};

export default TabCom;
