from flask import Flask, request, jsonify
import psycopg2
from tkinter import ttk
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class cadastro(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    sobreNome = StringField('sobreNome', validators=[DataRequired()])
    emil = StringField('email', validators=[DataRequired()])
    telefone = StringField('telefone', validators=[DataRequired()])
    idade = StringField('idade', validators=[DataRequired()])
    tipoPessoa = StringField('tipoPessoa', validators=[DataRequired()])
    numCadastro = StringField('numCadastro', validators=[DataRequired()])

app = Flask(__name__)

# Configuração do banco de dados
config = psycopg2.connect (
    host="localhost",
    port="5432",
    database="postgres",
    user="postgres",
    password='123'
)

@app.route("/cadastro", methods=["POST"])
def cadastrar_pessoa():
    pnome = request.form.get('pnome')
    sobrenome = request.form.get('sobreNome')
    email = request.form.get('email')
    telefone = request.form.get('telefone')
    idade = request.form.get('idade')
    tipopessoa= request.form.get('tipoPessoa')
    numcadastro = request.form.get('numCadastro')
    
    try: 
        # Estabelecer a conexão com o banco de dados
        conn = psycopg2.connect(*config)

        #Cria um cursor para execultar comandos SQL
        cursor = conn.cursor()

        # Verificar se a tabela já existe
        cursor.execute("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'cliente')")
        table_exists = cursor.fetchone()[0] 
        
        if not table_exists:
            #Consulta SQL para criar a tabela 
            create_table_query = """
              CREATE TABLE IF NOT EXISTS cliente (
                id SERIAL PRIMARY KEY,
                pnome VARCHAR(50) NOT NULL,
                sobrenome VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                telefone VARCHAR(25) NOT NULL,
                idade INTEGER NOT NULL,
                tipopessoa VARCHAR(2) NOT NULL,
                numcadastro VARCHAR(18) NOT NULL ) """
# Executar a consulta SQL para criar a tabela
            cursor.execute(create_table_query)

        cursor.execute("INSERT INTO cliente (pnome, sobrenome, email, telefone, idade, tipopessoa, numcadastro) VALUES (%s, %s, %s, %s, %s, %s, %s)", ('pnome, sobrenome, email, telefone, idade, tipopessoa, numcadastro'))
    
        conn.commit()
    
        cursor.close()
        
        return jsonify({'status':'success', 'message': 'Cadastro realizado com sucesso!'})
    except psycopg2.Error as e:
        return jsonify({'status':'success', 'message': 'Erro sucesso!' + str(e)})

if __name__ == '_main_':
    app.run()