package com.codeonce.test;

import static org.junit.Assert.*;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.codeonce.test.controller.ApiController;

@SpringBootTest
public class TestApplicationTests {

	ApiController controller = new ApiController();
	
	@Test
	public void contextLoads() {
	}
	
	@Test
	public void countPonctuationSignesTest(){
		String text = "helloworld!!" ;
		int count = controller.countFromText(text) ;
		assertTrue(count == 2);
	}

}
