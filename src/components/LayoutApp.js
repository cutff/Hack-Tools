import React from "react";
import { Layout, Menu, Typography } from "antd";
import { CopyrightCircleOutlined } from "@ant-design/icons";
import { createFromIconfontCN, DatabaseOutlined } from "@ant-design/icons";
import { goTo } from "react-chrome-extension-router";
import ReverseShell from "./ReverseShell";
import PhpReverseShell from "./PhpReverseShell";
import TtySpawnShell from "./TtySpawnShell";
import Base64Encode from "./encoding/Base64Encode";
import HexEncode from "./encoding/HexEncode";
import Hashing from "./encoding/Hashing";
import URLDecode from "./encoding/URLEncode";
import LinuxCommands from "./LinuxCommands";
import LFI from "./web/LFI";
import XSS from "./web/XSS";
import SQLi from "./web/SqlInjection";
import AboutUs from "./AboutUs";
import FeedRSS from "./FeedRSS";
import SSTI from "./web/SSTI";
const { Paragraph } = Typography;
const { Sider, Content, Footer } = Layout;
const IconFont = createFromIconfontCN({
	scriptUrl: ["./iconfont.js"],
});

export default (props) => {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider collapsed={true}>
				<div className='logo'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='45'
						height='35'
						viewBox='0 0 134.624 80.584'
					>
						<g transform='translate(-6.457 -23.8)'>
							<path
								d='M138.715,62.377c-9.043-1.871-15.592.78-21.673,4.989l-5.616-26.958-2.18-10.463a1.432,1.432,0,0,0-.624-.936c-.312-.156-6.86-4.21-32.431-4.21s-34.458,4.678-34.77,4.834c-.468.312-.78.624-.78,1.091L36.9,57.543c-4.678,0-19.022.624-26.039,9.2C7.119,71.264,6.651,78.125,9.3,84.829c4.054,9.979,14.033,16.839,26.506,18.087a80.594,80.594,0,0,0,8.42.468c21.985,0,40.071-8.887,52.389-16.06,1.559-.468,11.538-3.274,24.635-8.42,14.812-5.769,18.554-14.033,18.71-14.5a2.163,2.163,0,0,0,0-1.4C139.495,62.689,139.183,62.377,138.715,62.377ZM43.448,32.128c2.495-1.091,11.694-4.21,32.743-4.21,20.581,0,28.377,2.651,30.248,3.43L111.585,56.3a165.118,165.118,0,0,1-40.851,8.887C51.088,66.9,41.733,63,39.238,61.6ZM95.058,84.517c-13.409,7.8-33.991,17.931-59.094,15.436-11.382-1.247-20.27-7.328-24.012-16.216-2.183-5.613-1.871-11.382,1.091-14.968,5.925-7.328,18.554-8.108,23.232-8.108L34.249,74.694a1.367,1.367,0,0,0,.78,1.559c9.979,6.081,21.049,8.264,31.5,8.264,16.216,0,31.34-5.145,40.7-9.043A85,85,0,0,1,95.058,84.517ZM120,75.942C114.236,78.125,109.091,80,104.881,81.4c2.183-1.715,4.054-3.43,6.081-5.145,7.172-6.237,13.1-11.382,21.829-11.382a19.881,19.881,0,0,1,2.962.156C134.038,67.522,129.516,72.356,120,75.942Z'
								transform='translate(0 0)'
								fill='#F0F2F5'
								stroke='#F0F2F5'
								stroke-width='2'
							/>
						</g>
					</svg>
				</div>
				<Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
					<Menu.Item
						key='1'
						icon={
							<IconFont
								type='icon-gnubash'
								style={{ fontSize: "1.5em", marginTop: 3 }}
							/>
						}
						onClick={() => goTo(ReverseShell)}
					>
						Reverse Shell
					</Menu.Item>
					<Menu.Item
						key='2'
						icon={
							<IconFont
								type='icon-php'
								style={{ fontSize: "1.5em", marginTop: 3 }}
							/>
						}
						onClick={() => goTo(PhpReverseShell)}
					>
						PHP Reverse Shell
					</Menu.Item>
					<Menu.Item
						key='3'
						icon={
							<IconFont
								type='icon-lvzhou_yuanchengTelnet'
								style={{ fontSize: "1.5em", marginTop: 3 }}
							/>
						}
						onClick={() => goTo(TtySpawnShell)}
					>
						TTY Spawn Shell
					</Menu.Item>
					<Menu.Item
						key='4'
						icon={
							<IconFont
								type='icon-linux'
								style={{ fontSize: "1.5em", marginTop: 3 }}
							/>
						}
						onClick={() => goTo(LinuxCommands)}
					>
						Useful Linux commands
					</Menu.Item>
					<Menu.Item
						key='5'
						icon={
							<IconFont
								style={{ fontSize: "1.5em", marginTop: 3 }}
								type='icon-l-file'
							/>
						}
						onClick={() => goTo(LFI)}
					>
						LFI
					</Menu.Item>
					<Menu.Item
						key='6'
						icon={
							<IconFont
								style={{ fontSize: "1.5em", marginTop: 3 }}
								type='icon-js'
							/>
						}
						onClick={() => goTo(XSS)}
					>
						XSS
					</Menu.Item>
					<Menu.Item
						key='7'
						icon={
							<IconFont
								style={{ fontSize: "1.5em", marginTop: 3 }}
								type='icon-sql'
							/>
						}
						onClick={() => goTo(SQLi)}
					>
						SQL Injection
					</Menu.Item>
					<Menu.Item
						key='8'
						icon={
							<IconFont
								style={{ fontSize: "1.5em", marginTop: 3 }}
								type='icon-jiemaleixing'
							/>
						}
						onClick={() => goTo(Base64Encode)}
					>
						Base64 Encoder / Decoder
					</Menu.Item>
					<Menu.Item
						key='9'
						icon={
							<IconFont
								style={{ fontSize: "1.5em", marginTop: 3 }}
								type='icon-hash'
							/>
						}
						onClick={() => goTo(Hashing)}
					>
						Hashing
					</Menu.Item>
					<Menu.Item
						key='10'
						icon={
							<IconFont
								style={{ fontSize: "1.5em", marginTop: 3 }}
								type='icon-url'
							/>
						}
						onClick={() => goTo(URLDecode)}
					>
						URL Encoder / Decoder
					</Menu.Item>
					<Menu.Item
						key='11'
						icon={
							<IconFont
								style={{ fontSize: "1.5em", marginTop: 3 }}
								type='icon-hexo'
							/>
						}
						onClick={() => goTo(HexEncode)}
					>
						Hexadecimal Encoder / Decoder
					</Menu.Item>
					<Menu.Item
						key='12'
						icon={
							<IconFont
								type='icon-inserttemplate'
								style={{ fontSize: "1.5em", marginTop: 3 }}
							/>
						}
						onClick={() => goTo(SSTI)}
					>
						SSTI
					</Menu.Item>
					<Menu.Item
						key='13'
						icon={
							<IconFont
								type='icon-rss'
								style={{ fontSize: "1.5em", marginTop: 3 }}
							/>
						}
						onClick={() => goTo(FeedRSS)}
					>
						Feed RSS
					</Menu.Item>
					<Menu.Item
						key='14'
						icon={
							<IconFont
								type='icon-about'
								style={{ fontSize: "1.5em", marginTop: 3 }}
							/>
						}
						onClick={() => goTo(AboutUs)}
					>
						About us
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className='site-layout'>
				<Content style={{ margin: "0 16px" }}>
					<div
						className='site-layout-background'
						style={{ padding: 24, minHeight: 360 }}
					>
						{props.children}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					<CopyrightCircleOutlined /> Hack Tools - The all in one Red team
					browser extension for web pentesters
					<Paragraph style={{ textAlign: "center" }}>
						Ludovic COULON - Riadh BOUCHAHOUA
					</Paragraph>
					<pre style={{ textAlign: "center" }}>HackTools Version - 0.1.4</pre>
				</Footer>
			</Layout>
		</Layout>
	);
};
