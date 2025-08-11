const modalHTML = `
  <div id="terms-modal" class="modal">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div id="terms-content">
        <h2>Termos e Condições de Uso – GUARD® CARD</h2>
        <p>Este documento rege a sua compra e uso do nosso cartão de bloqueio de sinal NFC/RFID. Ao adquirir nosso produto, você concorda com os termos descritos abaixo.</p>

        <p><strong>1. Informações da Empresa</strong></p>
        <ul>
          <li><strong>Razão Social:</strong> 60.967.281 ADRIANO MONTAGUTI</li>
          <li><strong>CNPJ:</strong> 60.967.281/0001-88</li>
          <li><strong>Produto:</strong> GUARD CARD (Cartão Bloqueador de Sinal NFC/RFID)</li>
        </ul>

        <br />

        <p><strong>2. Descrição e Eficácia do Produto</strong></p>
        <p>O GUARD CARD é um cartão projetado para proteger seus cartões de crédito, débito e outros documentos com tecnologia de pagamento por aproximação (NFC/RFID) contra transações não autorizadas e leituras indevidas. Ele funciona criando um campo de proteção que interfere e bloqueia a comunicação entre o leitor e o seu cartão.</p>
        <p><strong>Aviso Importante sobre a Eficácia:</strong> O GUARD CARD foi testado e demonstrou eficácia no bloqueio de sinal da maioria das máquinas de pagamento e leitores NFC/RFID populares no mercado. No entanto, devido à constante evolução da tecnologia de leitores e à existência de inúmeros modelos diferentes, a GUARD não pode garantir 100% de eficácia contra todos os tipos de terminais de pagamento existentes ou que venham a ser desenvolvidos no futuro.</p>
        <p>A empresa não se responsabiliza por eventuais falhas de bloqueio em terminais específicos ou por perdas financeiras decorrentes de tais eventos.</p>

        <p><strong>3. Política de Garantia</strong></p>
        <p>Conforme o Código de Defesa do Consumidor (Lei nº 8.078/1990), o GUARD CARD possui uma garantia legal de 90 (noventa) dias contra defeitos de fabricação.</p>
        <ul>
          <li><strong>Prazo:</strong> A contagem do prazo da garantia inicia-se na data de recebimento do produto pelo cliente, confirmada pelo código de rastreio da entrega.</li>
          <li><strong>Cobertura:</strong> A garantia cobre exclusivamente defeitos de funcionamento e vícios de fabricação que impeçam o uso normal do produto. Não estão cobertos danos causados por mau uso, como quebras, arranhões profundos, exposição a calor excessivo, contato com produtos químicos ou qualquer outra avaria decorrente de uso inadequado.</li>
          <li><strong>Procedimento:</strong> Caso identifique um defeito de fabricação dentro do prazo de garantia, o cliente deverá entrar em contato com nosso suporte para receber as instruções de envio do produto para análise. Se o defeito for confirmado, providenciaremos a substituição por um novo produto sem custos adicionais.</li>
        </ul>

        <br />

        <p><strong>4. Política de Devolução (Direito de Arrependimento)</strong></p>
        <p>Para compras realizadas fora do estabelecimento comercial (como em nosso site), o cliente tem o direito de se arrepender da compra no prazo de 7 (sete) dias corridos, a contar da data de recebimento do produto.</p>
        <ul>
          <li><strong>Prazo:</strong> A solicitação de devolução deve ser feita em até 7 dias corridos após a entrega.</li>
          <li><strong>Condições do Produto:</strong> O produto deve ser devolvido em sua embalagem original, sem indícios de uso, sem violação do lacre original do fabricante (se houver), e acompanhado de todos os seus acessórios.</li>
          <li><strong>Reembolso:</strong> Após o recebimento e a verificação do produto devolvido, a GUARD procederá com o reembolso integral do valor pago, incluindo o custo do frete original. O estorno será realizado na mesma modalidade de pagamento utilizada na compra.</li>
        </ul>

        <br />

        <p><strong>5. Limitação de Responsabilidade</strong></p>
        <p>Ao adquirir o GUARD CARD, o cliente reconhece e concorda que a responsabilidade da GUARD se limita ao valor do produto adquirido. A empresa não será responsável por quaisquer danos indiretos, incidentais ou consequenciais, incluindo, mas se limitando a, perdas financeiras resultantes de uma falha no bloqueio do sinal NFC/RFID.</p>

        <p><strong>6. Lei Aplicável e Foro</strong></p>
        <p>Estes Termos e Condições de Uso são regidos pelas leis da República Federativa do Brasil. Para a solução de quaisquer controvérsias decorrentes deste contrato, fica eleito o foro do domicílio do consumidor.</p>

        <p><strong>7. Propriedade Intelectual</strong></p>
        <p>A marca “GUARD®”, assim como seu logotipo e toda a identidade visual associada, é uma marca registrada de propriedade de 60.967.281 ADRIANO MONTAGUTI, protegida pelas leis de propriedade industrial do Brasil.</p>

        <p><strong>Ao realizar a compra do GUARD CARD, você declara ter lido, compreendido e aceitado integralmente os termos e condições aqui estabelecidos.</strong></p>
      
      </div>
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const termsModal = document.getElementById('terms-modal');
  const termsLink = document.getElementById('terms-link');
  const closeButton = document.querySelector('.close-button');

  termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    termsModal.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    termsModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == termsModal) {
      termsModal.style.display = 'none';
    }
  });
});
