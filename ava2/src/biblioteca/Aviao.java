package biblioteca;

import java.util.Scanner;

public class Aviao extends Transportes {
	private String prefixo;
	private String dataRevisao;
	private double valorReajustado;
	
	//métodos de acesso Getters e Setters
	
	public String getPrefixo() {
		return prefixo;
	}
	public void setPrefixo(String prefixo) {
		this.prefixo = prefixo;
	}
	public String getDataRevisao() {
		return dataRevisao;
	}
	public void setDataRevisao(String dataRevisao) {
		this.dataRevisao = dataRevisao;
	}
	
	//métodos contrutores
	public Aviao() { }
	
	public Aviao(int capacidadeTanque, int numeroPassageiros) {
		super(capacidadeTanque, numeroPassageiros);
	}
	
	public Aviao(int capacidadeTanque, int numeroPassageiros, double preco) {
		super(capacidadeTanque,numeroPassageiros, preco);
	}
	
	public Aviao(int capacidadeTanque, int numeroPassageiros, double preco, String prefixo) {
		super(capacidadeTanque,numeroPassageiros, preco);
		setPrefixo(prefixo);
	}
	
	public Aviao(int capacidadeTanque, int numeroPassageiros, double preco, String prefixo, String dataRevisao) {
		super(capacidadeTanque,numeroPassageiros, preco);
		setPrefixo(prefixo);
		setDataRevisao(dataRevisao);
	}
	
	public void cadastrar(int capacidadeTanque, int numeroPassageiros, double preco, String prefixo, String dataRevisao) {
		super.cadastrar(capacidadeTanque, numeroPassageiros, preco);
		setPrefixo(prefixo);
		setDataRevisao(dataRevisao);
	}
	
	//método imprimir
	public void imprimir() {
		super.imprimir();
		System.out.println("Prefixo: " + getPrefixo());
		System.out.println("Data de revisão: " + getDataRevisao());
		
		reajustarPreco(percentual);
	}
	
	//método de entrada
	public void entrada() {
		Scanner sc = new Scanner(System.in);
		super.entrada();
		System.out.println("Prefixo: ");
		setPrefixo(sc.nextLine());
		System.out.println("Data de revisão: ");
		setDataRevisao(sc.nextLine());
		//System.out.println("Digite o valor do percentual (%): ");
		//double percentual = sc.nextDouble();
	}
	
	double percentual = 10.0;
	public void reajustarPreco(double percentual) {
		valorReajustado = (preco*percentual)/100 + preco;
		System.out.println("Preço com 10% de reajuste: " + valorReajustado);
	}
	
}
