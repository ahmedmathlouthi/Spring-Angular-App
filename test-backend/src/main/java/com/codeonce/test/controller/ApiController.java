package com.codeonce.test.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ApiController {

	
	 // Compter virgules : http://localhost:8090/Api/servlet/count
	 @CrossOrigin(origins = "http://localhost:4200")
	 @PostMapping("/count")
	 @ResponseBody
	 public int countFromText(@RequestBody String text) {
		 int count = 0;
		 char[] signes = new char[] {';', ',' , '.', ';', '!','?',':'};
		 for(int i= 0; i<text.length(); i++){
			 if(contains(text.charAt(i),signes)){
				 count++;
			 }
		 }
	 return count;
	 }
	 
	 static boolean contains(char c, char[] array) {
	        for (char x : array) {
	            if (x == c) {
	                return true;
	            }
	        }
	        return false;
    }

	public ApiController() {
		super();
		// TODO Auto-generated constructor stub
	}
	 
	 
}
