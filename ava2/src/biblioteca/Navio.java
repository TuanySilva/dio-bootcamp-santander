package biblioteca;

import java.util.Scanner;

public class Navio extends Transportes {
	private String nome;
	private int numeroTripulantes;
	private String dataLancamento;
	
	//métodos de acesso Getters e Setters 
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getNumeroTripulantes() {
		return numeroTripulantes;
	}
	public void setNumeroTripulantes(int numeroTripulantes) {
		this.numeroTripulantes = numeroTripulantes;
	}
	public String getDataLancamento() {
		return dataLancamento;
	}
	public void setDataLancamento(String dataLancamento) {
		this.dataLancamento = dataLancamento;
	}
	
	//métodos contrutores
	public Navio() { }
	
	public Navio(int capacidadeTanque, int numeroPassageiros) {
		super(capacidadeTanque, numeroPassageiros);
	}
	
	public Navio(int capacidadeTanque, int numeroPassageiros, double preco) {
		super(capacidadeTanque,numeroPassageiros, preco);
	}

	public Navio(int capacidadeTanque, int numeroPassageiros, double preco, String nome) {
		super(capacidadeTanque,numeroPassageiros, preco);
		setNome(nome);
	}
	
	public Navio(int capacidadeTanque, int numeroPassageiros, double preco, String nome, int numeroTripulantes) {
		super(capacidadeTanque,numeroPassageiros, preco);
		setNome(nome);
		setNumeroTripulantes(numeroTripulantes);
	}
	
	public Navio(int capacidadeTanque, int numeroPassageiros, double preco, String nome, int numeroTripulantes, double passageiroPorTripulantes) {
		super(capacidadeTanque,numeroPassageiros, preco);
		setNome(nome);
		setNumeroTripulantes(numeroTripulantes);
		
	}
	
	public Navio(int capacidadeTanque, int numeroPassageiros, double preco, String nome, int numeroTripulantes, String dataLancamento) {
		super(capacidadeTanque,numeroPassageiros, preco);
		setNome(nome);
		setNumeroTripulantes(numeroTripulantes);
		setDataLancamento(dataLancamento);
	}
	
	public void cadastrar(int capacidadeTanque, int numeroPassageiros, double preco, String nome, int numeroTripulantes, String dataLancamento) {
		super.cadastrar(capacidadeTanque, numeroPassageiros, preco);;
		setNome(nome);
		setNumeroTripulantes(numeroTripulantes);
		setDataLancamento(dataLancamento);
	}
	
	//método imprimir
	public void imprimir() {
		super.imprimir();
		System.out.println("Número de tripulantes: " + getNumeroTripulantes());
		System.out.println("Data de lançamento: " + getDataLancamento());
		System.out.println("Número de passageiros por tripulantes: " + passageirosPorTripulantes());
	}
	
	//método de entrada
	public void entrada() {
		Scanner sc = new Scanner(System.in);
		super.entrada();
		System.out.println("Número de tripulantes: ");
		setNumeroTripulantes(Integer.parseInt(sc.nextLine()));
		System.out.println("Data de lançamento: ");
		setDataLancamento(sc.next());
		
	}
	
	//método passageitosPorTripulantes
	public double passageirosPorTripulantes() {
		return numeroPassageiros/numeroTripulantes;
	}
	
}
