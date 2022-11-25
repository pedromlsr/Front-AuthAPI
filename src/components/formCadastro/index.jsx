import { React, useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

import axios from "axios";

import BotaoComponent from "../button";
import { ContainerForm } from "./style";
import { viaCep } from "../../Services/Api/apiConnection";

function FormularioCadastroComponent() {

  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    numero: "",
    complemento: "",
    cidade: "",
    uf: "",
    cep: "",
  })

  useEffect(() => {
    if (endereco.cep.length === 8) {
      handleViaCep()
    }
  }, [endereco.cep])




  const handleViaCep = async () => {
    const res = await viaCep.get(`${endereco.cep}/json/`);
    setEndereco({...endereco, 
      logradouro: res.data.logradouro,
      bairro: res.data.bairro,
      cidade: res.data.localidade,
      uf: res.data.uf
    })
  }

  return (
    <ContainerForm>
      <Form className="form-cadastro border mb-3">
        <legend>Informações Pessoais</legend>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nome completo:</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome..." />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail1">
            <Form.Label>E-mail pessoal:</Form.Label>
            <Form.Control type="email" placeholder="Melhor e-mail do usuário" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail2">
            <Form.Label>E-mail da empresa:</Form.Label>
            <Form.Control type="email" placeholder="E-mail criado para o usuário" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCpf">
            <Form.Label>CPF:</Form.Label>
            <Form.Control type="text" placeholder="Digite um CPF valido" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Celular:</Form.Label>
            <Form.Control type="password" placeholder="(xx) xxxxx-xxxx" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridBirthDate">
            <Form.Label>Data de nascimento:</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>

        <legend>Informações Contratuais</legend>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridBirthDate">
            <Form.Label>Data de admissão:</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Nivel de acesso:</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Escolher...</option>
              <option>Colaborador</option>
              <option>Gestor</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <legend>Informações de Endereço</legend>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Rua:</Form.Label>
            <Form.Control placeholder="Rua Exemplo, 123" value={endereco.logradouro} onChange={(e) => setEndereco({...endereco, logradouro: e.target.value})}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Número:</Form.Label>
            <Form.Control placeholder="Rua Exemplo, 123" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control value={endereco.bairro} onChange={(e) => setEndereco({...endereco, bairro: e.target.value})}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress3">
            <Form.Label>Complemento:</Form.Label>
            <Form.Control placeholder="Apartamento, Bloco, ..." />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control value={endereco.cidade} onChange={(e) => setEndereco({...endereco, cidade: e.target.value})}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado:</Form.Label>
            <Form.Select defaultValue="Choose..." value={endereco.uf} onChange={(e) => setEndereco({...endereco, uf: e.target.value})}>
              <option>Escolher...</option>
              <option>AC</option>
              <option>AL</option>
              <option>AP</option>
              <option>AM</option>
              <option>BA</option>
              <option>CE</option>
              <option>DF</option>
              <option>ES</option>
              <option>GO</option>
              <option>MA</option>
              <option>MT</option>
              <option>MS</option>
              <option>MG</option>
              <option>PA</option>
              <option>PB</option>
              <option>PR</option>
              <option>PE</option>
              <option>PI</option>
              <option>RJ</option>
              <option>RN</option>
              <option>RS</option>
              <option>RO</option>
              <option>RR</option>
              <option>SC</option>
              <option>SP</option>
              <option>SE</option>
              <option>TO</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP:</Form.Label>
            <Form.Control placeholder="XXXXX-XXX" value={endereco.cep} onChange={(e) => setEndereco({...endereco, cep: e.target.value})} />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Concorda com os termos" />
        </Form.Group>
        <Row>
          <Col className="d-flex justify-content-end gap-2">
            <BotaoComponent tamanho="10rem" bgColor="#585859" textColor="#FFF">
              Cancelar
            </BotaoComponent>
            <BotaoComponent tamanho="10rem" bgColor="#03A688" textColor="#FFF">
              Enviar
            </BotaoComponent>
          </Col>
        </Row>
      </Form>
    </ContainerForm>
  );
}

export default FormularioCadastroComponent;
