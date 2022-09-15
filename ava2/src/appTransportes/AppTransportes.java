package appTransportes;

import biblioteca.*;

public class AppTransportes {

	public static void main(String[] args) {
		
		 Aviao vetAviao[] = new Aviao[1];
		
		for(int i=0; i<vetAviao.length; i++) {
			//Não pode esquecer que deve ser criado cada objeto Disciplina do vetor, antes de usá-lo
			vetAviao[i] = new Aviao();
			
			//Você pode usar qualquer método visivel do objeto
			//Você deve apenas indivar o indice do elemento
			System.out.println("------------Informações do Avião " + i+1 + "------------");
			vetAviao[i].entrada();
		}
		
		for (int i = 0; i < vetAviao.length; i++) {
			//exibe os dados de cada Disciplina do vetor
			System.out.println("------------Resultados das informações do Avião " + i+1 + "------------");
			vetAviao[i].imprimir();
		}
		
		Navio vetNavio[] = new Navio[1];
		
		for(int i=0; i<vetNavio.length; i++) {
			vetNavio[i] = new Navio();
			System.out.println();
			System.out.println("------------Informações do Navio " + i+1 + "------------");
			vetNavio[i].entrada();
		}
		
		for (int i=0; i<vetNavio.length; i++) {
			System.out.println("------------Resultados das informações do Navio " + i+1 + "------------");
			vetNavio[i].imprimir();
		}
	
	}

}
