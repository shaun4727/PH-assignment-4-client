
import React, { useState } from "react";
import { ConfigProvider, Tabs } from "antd";
import TabCard from "./tabChild/tabCard";


const TabCom: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>("Biography");
const tabListNoTitle = [
    {
      key: "Biography",
      label: "BIOGRAPHY",
      children: <TabCard activeTabKey={activeTabKey} />, // ✅ children goes here
    },
    {
      key: "Education",
      label: "EDUCATION",
      children: <TabCard activeTabKey={activeTabKey} />,
    },
    {
      key: "Mystery",
      label: "MYSTERY",
      children: <TabCard activeTabKey={activeTabKey}/>,
    },
  ];
  const onTab2Change = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <>
    <ConfigProvider
  theme={{

    components: {
      Tabs: {
        itemColor: 'var(--active-btn-border)',
        itemHoverColor: 'var(--active-btn-border)',
        itemSelectedColor: 'var(--active-btn-border)',
        inkBarColor: 'var(--active-btn-border)'
      },
    },
  }}
>
<Tabs defaultActiveKey="Biography" items={tabListNoTitle}  onChange={onTab2Change} style={{marginTop: '25px'}}/>

</ConfigProvider>
      
    </>
  );
};

export default TabCom;
