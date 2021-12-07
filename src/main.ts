import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from './app.module'

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Урок по продвинотому BACKEND')
    .setDescription('Документация по REST API')
    .setVersion('1.0.0')
    .addTag('JustCallMeSamaTushka')
    .build()
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
}

start()