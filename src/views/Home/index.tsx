import React, {memo} from "react";
import ThemeSwitch from "@/components/ThemeSwitch";
// import LazyLoad from "@/components/lazyLoad/index";
import WaterMark from "@/components/WaterMark/index";

const Home: React.FunctionComponent = memo(() => {

    return (
        <div>
            <ThemeSwitch/>
            {/*<LazyLoad/>*/}
            <WaterMark content={['测试水印', 'zwj']}
                       fontStyle={{
                           fontWeight: 'bold',
                           fontSize: '14px',
                       }}>
                <div style={{height: 800}}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem
                        ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
                        sapiente? Eveniet, id provident!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem
                        ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
                        sapiente? Eveniet, id provident!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem
                        ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
                        sapiente? Eveniet, id provident!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem
                        ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
                        sapiente? Eveniet, id provident!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem
                        ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
                        sapiente? Eveniet, id provident!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem
                        ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
                        sapiente? Eveniet, id provident!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem
                        ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse
                        sapiente? Eveniet, id provident!</p>
                </div>
            </WaterMark>
        </div>
    );
});

export default Home;
