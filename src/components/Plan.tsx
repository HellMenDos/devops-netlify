import { useState } from 'react';
import './Plan.css';

interface Module {
  title: string;
  description: string;
}

const Plan = () => {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const modules: Module[] = [
    {
      title: 'Модуль 1 - Система контроля версий (гит)',
      description: 'Тезисы: Что такое GitFlow / Trunk Base Dev? Рассмотрим в чем отличие и когда стоит использовать merge, а когда rebase. Рассмотрим продвинутые команды по типу cherry-pick, squash, reset, stash. Как переименовывать и вообще именовать коммиты. Будет предоставлена исчерпывающая шпора по всем командам гита включая продвинутые. Работа с тегами, сабмодулями и многим другим...'
    },
    {
      title: 'Модуль 2 - Работа в Сети и запросы через сеть в разных форматах',
      description: 'Тезисы: Что такое HTTP/SOAP/RPC/GraphQL/WebSocket, для чего он и какие версии есть. UNDER / Over Fetching. HTTP 1. HTTP 1.1. HTTP 2. HTTP 3. TCP. UDP. IP. Какие работает HTTPS и откуда TLS/SSL. Как работать с REST. Принципы REST. Методы. Как кешировать ресурсы определенным образом и управлять последовательностью подгрузок на странице. Уязвимости и безопастность. XSS. CQRS. CSRF. И многое другое...'
    },
    {
      title: 'Модуль 3 - Linux(Bash)',
      description: 'Тезисы: Работа с файлами и каталогами, Работа с текстом, Пользователи и группы, Работа с процессами, Работа с сетью, Работа с архивами, Работа с пакетами (Debian/Ubuntu), Перенаправление, рассматриваем Bash-конструкции и многое другое....'
    },
    {
      title: 'Модуль 4 - CI/CD',
      description: 'Тезисы: Разбор того как выглядит полная настройка CI/CD для проектов на примере GitHub/GitLab actions. Так же рассмотрим новый инструмент Circle CI и многое другое....'
    },
    {
      title: 'Модуль 5 - Consul-Vault',
      description: 'Тезисы: Рассмотрим для чего они вообще нужны и что привносят, в чем между ними отличие и почему без них сейчас никуда. Так же рассматрим мини-проект с их использованием и многое другое...'
    },
    {
      title: 'Модуль 6 - ELK Stack/Prometheus + Grafana + Loki/OpenTelemetry шпора',
      description: 'Тезисы: Рассмотрим из чего вообще состоит ELK стек и для чего что нужно, рассмотрим пример проекта и как это все настроить. Рассмотрим связку Prometheus + Grafana для сбора метрик, рассмотрим проект с использованием этих технологий и того как это работает. Так же будет предоставлена шпора по Grafana Loki и OpenTelemetry и многое другое...'
    },
    {
      title: 'Модуль 7 - Redis и распределенная блокировка',
      description: 'Тезисы: Рассмотрим полную работу с Redis, рассмотрим все команды, рассмотрим работы с Redis на примерах, рассмотрим политики вытеснения кеша, рассмотрим типы данных, а так же распределенную блокировку на примере и многое другое...'
    },
    {
      title: 'Модуль 8 - Nginx + Traefik',
      description: 'Тезисы: Рассмотрим как работает Nginx, как его настраивать. Рассмотрим сжатие, балансировку нагрузки, проксирование и многое другое. Так же будет предоставлена шпора по Traefik и как с ним работать и многое другое...'
    },
    {
      title: 'Модуль 9 - Docker, Docker-Swarm, Docker-Compose',
      description: 'Тезисы: Тут мы рассмотрим все команды по работе с докер, как стартануть приложение, сделать билд, выгрузить в DockerHub, как написать docker-compose файл со всей конфигурацией + поработаем с Docker Swarm и Kubernetes, а именно поработаем с основными частями: поды, деплойменты, сервисы, ингресс контроллеры и многое другое...'
    },
    {
      title: 'Модуль 10 - Исчерпывающие шпоры по Ansible + Terraform + Kubernetes/Helm',
      description: 'Тезисы: тут мы рассмотрим Ansible, Terraform, Kubernetes/Helm'
    },
    {
      title: 'Консультация/Собеседование + доп материал + задания',
      description: 'Первые 30 купивших получат одну бесплатную консультацию либо собеседование, а так же дополнительный материал по поиску работы. Так же есть задание для прохождения.'
    }
  ];

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <section className="plan" id="plan">
      <div className="plan__inner">
        <div className="plan__inner__title">Что будет в курсе ?</div>
        <div className="plan__question__container">
          {modules.map((module, index) => (
            <div key={index} className="question__row">
              <div 
                className="question__row__title"
                onClick={() => toggleModule(index)}
              >
                {module.title}
                <span className={`arrow ${openModule === index ? 'open' : ''}`}>▼</span>
              </div>
              <div 
                className={`question__row__describe ${openModule === index ? 'open' : ''}`}
              >
                {module.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;


