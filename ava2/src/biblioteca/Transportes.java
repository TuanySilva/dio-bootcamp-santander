package biblioteca;

import java.util.Scanner;

public class Transportes {
	protected int capacidadeTanque, numeroPassageiros;
	protected double preco;
	
	//métodos de acesso Getters e Setters
	public int getCapacidadeTanque() {
		return capacidadeTanque;
	}
	public void setCapacidadeTanque(int capacidadeTanque) {
		this.capacidadeTanque = capacidadeTanque;
	}
	public int getNumeroPassageiros() {
		return numeroPassageiros;
	}
	public void setNumeroPassageiros(int numeroPassageiros) {
		this.numeroPassageiros = numeroPassageiros;
	}
	public double getPreco() {
		return preco;
	}
	public void setPreco(double preco) {
		this.preco = preco;
	}
	
	//métodos contrutores
	public Transportes() { } //método construtor padrão
	
	public Transportes(int capacidadeTanque) {
		setCapacidadeTanque(capacidadeTanque);
	}
	
	public Transportes(double preco) {
		setPreco(preco);
	}
	
	public Transportes(int capacidadeTanque, int numeroPassageiros) {
		setCapacidadeTanque(capacidadeTanque);
		setNumeroPassageiros(numeroPassageiros);
	}
	
	public Transportes(int capacidadeTanque, int numeroPassageiros, double preco) {
		setCapacidadeTanque(capacidadeTanque);
		setNumeroPassageiros(numeroPassageiros);
		setPreco(preco);
	}
	
	public void cadastrar(int capacidadeTanque, int numeroPassageiros, double preco) {
		setCapacidadeTanque(capacidadeTanque);
		setNumeroPassageiros(numeroPassageiros);
		setPreco(preco);
	}
	
	//método imprimir
	public void imprimir() {
		System.out.println("Capacidade de Tanque: " + getCapacidadeTanque());
		System.out.println("Número de Passageiros: " + getNumeroPassageiros());
		System.out.println("Preço: " + getPreco());
	}
	
	//método de entrada
	public void entrada() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Capacidade de Tanque: ");
		setCapacidadeTanque(Integer.parseInt(sc.nextLine()));
		System.out.println("Número de Passageiros: ");
		setNumeroPassageiros(Integer.parseInt(sc.nextLine()));
		System.out.println("Preço: ");
		setPreco(Double.parseDouble(sc.nextLine()));
		
	}
	
}
