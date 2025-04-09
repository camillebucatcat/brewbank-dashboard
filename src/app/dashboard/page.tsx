import { Footer } from "@/stories/components/Footer/Footer";
import { Header } from "@/stories/components/Header/Header";
import { Toggle } from "@/stories/components/Toggle/Toggle";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <Header>
        <div>1</div>
        <div>2</div>
        <div>
          <div>profile</div>
        </div>
      </Header>
      <div>Hello Dashboard</div>
      <Toggle label="Active" disabled />
      <Footer>
        <div>1</div>
        <div>2</div>
        <div>
          <div>profile</div>
        </div>
      </Footer>
    </>
  );
}
