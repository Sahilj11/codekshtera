# Dev - AI-Powered Candidate Ranking System

This Spring Boot project is designed for ranking candidates based on job descriptions using **AI embeddings** and **PostgreSQL (pgvector)** for vector-based searches. It integrates **Ollama (Llama 3.2 & Nomic Embed Text)** for AI-powered text processing.

## 🚀 Features
- **AI Embeddings**: Uses **Nomic Embed Text** for candidate profile and job description embeddings.
- **Vector Search**: Powered by **pgvector** with **HNSW indexing** and **cosine distance**.
- **AI Chat**: Utilizes **Llama 3.2** for extracting experience and projects from resume pdf.
- **PostgreSQL Integration**: Stores structured job and candidate data.

## 🛠️ Tech Stack
- **Spring Boot**
- **React** 
- **PostgreSQL + pgvector**
- **Ollama (Llama 3.2, Nomic Embed Text)**
- **Hibernate & JPA**

## 🏗️ Candidate Ranking Algorithm
The ranking system scores candidates using weighted factors:

| Factor | Weight |
|--------|--------|
| Job Description Match | 40% |
| Skills Match | 20% |
| Location | 15% |
| Salary Expectation | 15% |
| Education | 15% |
| Experience | 15% |

## ⚙️ Configuration (application.properties)
```properties
spring.application.name=dev

# Ollama AI Models
spring.ai.ollama.base-url=http://localhost:11434
spring.ai.ollama.chat.options.model=llama3.2
spring.ai.ollama.embedding.model=nomic-embed-text

# PostgreSQL Configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/smartnaukri
spring.datasource.username=sahil
spring.datasource.password=qwerty
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

# Hibernate Settings
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true

# pgvector Configuration
spring.ai.vectorstore.pgvector.index-type=HNSW
spring.ai.vectorstore.pgvector.distance-type=COSINE_DISTANCE
spring.ai.vectorstore.pgvector.dimensions=768
spring.ai.vectorstore.pgvector.batching-strategy=TOKEN_COUNT
spring.ai.vectorstore.pgvector.batch-size=10000

# Spring boot run
```
mvn clean install
```
then 

```
mvn spring-boot:run
```

# Frontend
```
npm i && npm run dev
```
