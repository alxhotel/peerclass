package org.urjc.peerclass;

import org.kurento.commons.ConfigFileManager;
import org.kurento.room.KurentoRoomServerApp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(KurentoRoomServerApp.class)
//@SpringBootApplication
public class PeerClassApp {

	private static final Logger log = LoggerFactory.getLogger(PeerClassApp.class);
	
	private final static String KROOMDEMO_CFG_FILENAME = "kroomdemo.conf.json";

	static {
		ConfigFileManager.loadConfigFile(KROOMDEMO_CFG_FILENAME);
	}
	
	public static void main(String[] args) throws Exception {
		SpringApplication application = new SpringApplication(PeerClassApp.class);
		application.run();
	}

	public static void stop() {
		//context.stop();
	}

}
