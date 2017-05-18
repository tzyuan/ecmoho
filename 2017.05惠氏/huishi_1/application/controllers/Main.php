<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {
	public function index()
	{
		$this->load->view('index.html');
	}
	public function index2()
	{
		$this->load->view('index2.html');
	}
	public function index3()
	{
		$this->load->view('index3.html');
	}
	public function index4()
	{
		$this->load->view('index4.html');
	}
}
