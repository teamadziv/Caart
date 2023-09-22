import { Card, Page, Layout, ProgressBar, Icon } from "@shopify/polaris";
import { CircleTickMinor } from '@shopify/polaris-icons';

import { useState, useEffect } from "react";

import Welcome from "../components/Initial/Welcome";
import Setting from "../components/Initial/Setting";
import Enable from "../components/Initial/Enable";

import { useAuthenticatedFetch } from "./../hooks";
import { useNavigate } from "@shopify/app-bridge-react";
import { SkeletonBodyText } from '@shopify/polaris';

export default function HomePage() {
  const navigate = useNavigate();
  const [haveData, setHaveData] = useState(true)


  const fetch = useAuthenticatedFetch();
  const [progressBarIndicator, setProgressBarIndicator] = useState(1)
  const [selected, setSelected] = useState(['']);
  const handleChange = (value) => {
    setSelected(value);
  }
  const saveSettings = async () => {
    const resp = await fetch('/api/settings/modules', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Accept-Encoding": "gzip,deflate,compress",
      },
      body: JSON.stringify(selected)
    })
    resp.text().then(data => {
      const RespData = JSON.parse(data)
      console.log(RespData)
    });
  }

  useEffect(() => {
    fetchSetting();
    importProducts();
  }, [])

  const fetchSetting = async () => {
    const response = await fetch('/api/settings/modules');
    const data = await response.json()
    if (data.data === undefined || data.data.length == 0) {
      // array does not exist or is empty
      setHaveData(false)
    } else {
      navigate("/main")
    }
    console.log("from db", data.data[0]);

  }
  const importProducts = async () => {
    const response = await fetch('/api/products/import');

  }
  return (
    <Page>
      {haveData && <div style={{ marginTop: '20px' }}><SkeletonBodyText /></div>}

      {haveData === false && <Layout>
        <Layout.Section>
          <Card sectioned>
            <div className="caart_grid">
              <div className="grid_content">
                <h3>Setup Guide</h3>

              </div>
              <div className="grid_content">
                <ProgressBar progress={33.33 * progressBarIndicator} color="primary" />

              </div>
              <div className="grid_content align_right">
                <p>Progress {progressBarIndicator}/3</p>
              </div>
            </div>


            <div className="caart_initial_sidebar_container">
              <div className="caart_initial_sidebar">
                <ul>
                  <li className={progressBarIndicator == 1 ? 'active' :
                    progressBarIndicator > 1 ? 'done' : ''}>
                    <Icon
                      source={CircleTickMinor}
                      color="base"
                    /> <span>Welcome</span>
                  </li>
                  <li className={progressBarIndicator == 2 ? 'active' :
                    progressBarIndicator > 2 ? 'done' : ''}>
                    <Icon
                      source={CircleTickMinor}
                      color="base"
                    /> <span>Cart Setup</span>
                  </li>
                  <li className={progressBarIndicator == 3 ? 'active' :
                    progressBarIndicator > 3 ? 'done' : ''}>
                    <Icon
                      source={CircleTickMinor}
                      color="base"
                    /> <span>App Status</span>
                  </li>
                </ul>
              </div>


              <div className="caart_initial_sidebar_content">
                {progressBarIndicator == 1 ? <Welcome setProgressBarIndicator={setProgressBarIndicator} /> :
                  progressBarIndicator == 2 ? <Setting saveSettings={saveSettings} setProgressBarIndicator={setProgressBarIndicator} selected={selected} handleChange={handleChange} /> :
                    progressBarIndicator == 3 ? <Enable setProgressBarIndicator={setProgressBarIndicator} /> : 'No data available'}

              </div>
            </div>

          </Card>
        </Layout.Section>
      </Layout>}

    </Page>
  );
}
