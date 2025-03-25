<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).


CREATE TABLE "users" (
  "id" BIGSERIAL PRIMARY KEY,
  "full_name" VARCHAR NOT NULL,
  "whatsapp_number" VARCHAR,
  "instagram" VARCHAR,
  "email" VARCHAR NOT NULL UNIQUE,
  "birth_date" DATE,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted_at" TIMESTAMP
);

CREATE TABLE user_addresses (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    street_address VARCHAR(255) NOT NULL,
    address_number VARCHAR(255) NOT NULL,
    address_complement VARCHAR(255),
    neighborhood VARCHAR(255) NOT NULL,
    zip_code VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    is_primary_address BOOLEAN DEFAULT FALSE,
    
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
);

-- Create an index for faster lookups by user_id
CREATE INDEX idx_user_addresses_user_id ON user_addresses(user_id);

-- Create an index for finding primary addresses efficiently
CREATE INDEX idx_user_addresses_primary ON user_addresses(user_id, is_primary_address) 
WHERE is_primary_address = TRUE;



CREATE TABLE video_schedule (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    video_id BIGINT NOT NULL,
    appointment_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),
        
    CONSTRAINT fk_video
        FOREIGN KEY (video_id)
        REFERENCES videos(id)
);

-- Create indexes for foreign keys to improve performance
CREATE INDEX idx_video_schedule_user_id ON video_schedule(user_id);
CREATE INDEX idx_video_schedule_video_id ON video_schedule(video_id);

-- Create index for searching appointments
CREATE INDEX idx_video_schedule_appointment_date ON video_schedule(appointment_date);

-- Create index for soft deletes
CREATE INDEX idx_video_schedule_deleted_at ON video_schedule(deleted_at) 
WHERE deleted_at IS NULL;

-- Create trigger to update updated_at automatically
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_video_schedule_modtime
BEFORE UPDATE ON video_schedule
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

CREATE TABLE video_schedules (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  video_id BIGINT NOT NULL,
  appointment_date TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  CONSTRAINT fk_user
      FOREIGN KEY (user_id)
      REFERENCES users(id),
      
  CONSTRAINT fk_video
      FOREIGN KEY (video_id)
      REFERENCES videos(id)
);

-- Create indexes for foreign keys to improve performance
CREATE INDEX idx_video_schedule_user_id ON video_schedule(user_id);
CREATE INDEX idx_video_schedule_video_id ON video_schedule(video_id);

-- Create index for searching appointments
CREATE INDEX idx_video_schedule_appointment_date ON video_schedule(appointment_date);

-- Create index for soft deletes
CREATE INDEX idx_video_schedule_deleted_at ON video_schedule(deleted_at) 
WHERE deleted_at IS NULL;

-- Create trigger to update updated_at automatically
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_video_schedule_modtime
BEFORE UPDATE ON video_schedule
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

CREATE TABLE videos (
  id BIGSERIAL PRIMARY KEY,
  video_id VARCHAR(255) UNIQUE NOT NULL,
  video_description TEXT NOT NULL,
  question_layout_id VARCHAR(255) NOT NULL,
  temporary_location TEXT NOT NULL,
  final_location TEXT,
  external_id VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  removed_by_system BOOLEAN NOT NULL DEFAULT FALSE,
  removed_by_user BOOLEAN NOT NULL DEFAULT FALSE
);

-- Create index for unique video_id for faster lookup
CREATE UNIQUE INDEX idx_video_video_id ON video(video_id);

-- Create index for soft deletes
CREATE INDEX idx_video_deleted_at ON video(deleted_at) 
WHERE deleted_at IS NULL;

-- Create indexes for removal flags
CREATE INDEX idx_video_removal_flags ON video(removed_by_system, removed_by_user);

-- Create trigger to update updated_at automatically
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_video_modtime
BEFORE UPDATE ON video
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();