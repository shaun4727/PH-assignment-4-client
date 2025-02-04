import React, { useState } from "react";
import { Button, Card } from "antd";
import TabCard from "./tabChild/tabCard";
import { NavLink } from "react-router-dom";

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
        <div style={{ padding: "15px 0" }}>
          {React.isValidElement(contentListNoTitle[activeTabKey]) &&
            React.cloneElement(
              contentListNoTitle[activeTabKey] as React.ReactElement,
              { activeTabKey }
            )}
        </div>
        <div className="buy-section tab-view-all">
          <Button
            className="view-all"
            style={{
              width: "120px",
            }}
          >
            <NavLink to={`/all-products`}>View All</NavLink>
          </Button>
        </div>
        {/* {contentListNoTitle[activeTabKey]} */}
      </Card>
    </>
  );
};

export default TabCom;
