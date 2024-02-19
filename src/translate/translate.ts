import i18n from "i18next";
import "intl-pluralrules";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      Alert: {
        Subscribe: "Subscribe",
        Cancel: "Cancel",
        Modify: "Modify",
        Delete: "Delete",
        You_want_to_modify_the_data: "Do you want to modify the data?",
        Do_you_want_to_delete_the_weight_record:
          "Do you want to delete the weight record?",
        This_action_can_not_be_undone: "This action can not be undone",
      },
      ContactHelp: {
        contact_help: "Contact and Help",
        common_questions: "Common Questions",
        how_do_we_communicate: "How do we communicate?",
        access_telegram_community: "How to access the Telegram community?",
        why_not_a_diet: "Why is the plan not a diet?",
        want_to_train: "What if I want to train...",
        where_is_my_nutritional_plan: "Where is my nutritional plan?",
        when_do_i_receive_my_nutritional_plan:
          "When do I receive my nutritional plan?",
        help_desk: "Help Desk",
        resolve_your_common_doubts: "Resolve your common doubts",
      },
      FeedingTips: {
        Tips_para_una_alimentación_saludable: "Tips for a healthy diet",
        El_tip_más_importante_es_que_generes_una_relación_sana:
          "The most important tip is to build a healthy relationship with food so that taking care of yourself is a pleasure, not a hardship. Let's do it!",
        Planifica_tus_comidas: "Plan your meals",
        Te_ayuda_a_mantener_una_alimentacion_saludable:
          "Helps you maintain a healthy diet by allowing you to better organize yourself and incorporate macronutrients and micronutrients (proteins, healthy fats, lipids, etc.) that provide energy and vitality.",
        Come_porciones_adecuadas: "Eat appropriate portions",
        Evita_comer_en_exceso:
          "Avoid overeating. Listen to your body and eat when you're hungry, but stop when you're satisfied.",
        Limita_el_consumo_de_alimentos_procesados:
          "Limit the consumption of processed foods",
        Contienen_altas_cantidades_de_azúcares_grasas:
          "They contain high amounts of sugars, saturated fats, and harmful artificial additives.",
        Bebe_suficiente_agua: "Drink enough water",
        El_agua_es_esencial_para_mantener_el_cuerpo_hidratado:
          "Water is essential to keep the body hydrated and ensure the proper functioning of organs. Try to drink at least 2 liters of water per day.",
      },
      Days: {
        Sun: "Sun",
        Mon: "Mon",
        Tue: "Tue",
        Wed: "Wed",
        Thu: "Thu",
        Fri: "Fri",
        Sat: "Sat",
      },
      Training: {
        Metodo: "Method ",
      },
      Recommendeds: {
        Recommendeds: "Recommended",
      },
      Nutrition: {
        Omnivoro: "Omnivore 2621 Kcal",
        Desayuno: "Breakfast",
        Merienda: "Snack",
        Lunch: "Lunch",
        Cena: "Dinner",
        Postre: "Dessert",
        Subscribase_al_plan:
          "Subscribe to the BASIC plan to use the nutrition section",
        Recomendadas: "Recommended",
      },
      NutritionDetails: {
        Cerrar: "Close",
        Receta: "Recipe",
        Preparación: "Preparation",
        Ingredients: "Ingredients",
        De: "",
        No_contiene: "Not have",
      },
      Login: {
        Introduce_tu_email_y_contraseña: "Enter your email and password",
        place: "Password",
        Olvidaste_tu_contraseña: "Forgot your password?",
        Iniciar_Sesion: "Log In",
        No_tienes_cuenta: "Don't have an account?",
        Registrate: "Register",
      },
      Register: {
        Crea_tu_perfil_y_empieza_a_entrenar:
          "Create your profile and start training",
        Crear_cuenta: "Create account",
        Tienes_cuenta: "Already have an account?",
        Inicia_sesion: "Log in",
      },
      StepOne: {
        Como_quieres_que_nos_dirijamos_a_ti:
          "How do you want us to address you",
        Editar: "Edit",
        Tu_nombre_o_tu_alias: "Your name or alias",
        Si_quieres_que_nos_dirijamos:
          "If you want us to address you by your nickname, now is the time",
      },
      Siguiente: { Siguiente: "Next" },
      StepTwo: {
        Cual_es_tu_sexo_metabolico: "What is your metabolic sex?",
        HombreLabel: "Male",
        MujerLabel: "Female",
        Basado_en_tu_sexo:
          "Based on your metabolic sex, the best training plans for you will be determined.",
      },
      StepThree: {
        Algunos_datos: "Some data about you",
        Con_estos_datos_conseguiremos:
          "With this data, we will be able to determine how much energy (kcal) you consume daily and suggest training plans.",
        Fecha_de_nacimiento: "Date of Birth",
        Altura: "Height (cm)",
        Peso: "Weight (kg)",
      },
      StepFour: {
        Cual_es_tu_objetivo: "What is your goal?",
        Te_en_cuenta_que_cualquier_actividad:
          "Keep in mind that any physical activity increases muscle mass, tones, and maintains shape.",
        Perder_grasa: "Lose fat",
        Reducir_peso_corporal_y_grasa: "Reduce body weight and fat",
        Ganar_musculo: "Gain muscle",
        Incrementar_mi_masa_muscular: "Increase my muscle mass",
        Mantenimiento_y_tonificacion: "Maintenance and toning",
        Mejorar_mi_condicion_manteniendo_mi_peso:
          "Improve my condition while maintaining my weight",
      },
      StepFive: {
        Cuantos_pasos_caminas_al_dia: "How many steps do you walk per day?",
        Menos_de_5000_pasos_al_dia: "Less than 5000 steps per day",
        Entre_5000_y_10000_pasos_al_dia: "Between 5000 and 10000 steps per day",
        Mas_de_10000_pasos_al_dia: "More than 10000 steps per day",
      },
      StepSix: {
        Cuantos_dias_entrenas_semanalmente:
          "How many days do you train per week?",
        Menos_de_3_dias_por_semana: "Less than 3 days per week",
        dias_por_semana_3: "3 days per week",
        dias_por_semana_4: "4 days per week",
        dias_por_semana_5: "5 days per week",
        dias_por_semana_7_6: "6 or 7 days per week",
      },
      StepSeven: {
        En_que_nivel_quieres_empezar: "At what level do you want to start?",
        Podras_cambiar_el_nivel:
          "You can change the level at any time. If in doubt, start with the first level and go up.",
        Iniciacion: "Begginer",
        No_tengo_mucha_experiencia: "I don't have much experience",
        Regular: "Regular",
        Llevo_algunos_meses_entrenando: "I've been training for a few months",
        Avanzado: "Advanced",
      },
      StepEight: {
        Donde_quieres_entrenar: "Where do you want to train?",
        Casa: "Home",
        Entreno_con_equipamiento_domestico: "I train with home equipment",
        Gym: "Gym",
        Voy_al_gym_o_tengo_un_gym_en_casa:
          "I go to the gym or have a gym at home",
      },
      Account: {
        Perfil: "Profile",
        Editar: "Edit",
        Perfil_Metabolico: "Metabolic Profile",
        Objetivo: "Goal",
        Registro_de_peso_y_fotos: "Weight Record",
        Perfil_de_entrenamiento: "Training Profile",
        Cuenta_de_usuario: "User Account",
        Personaliza_la_aplicación: "Customize the App",
        Cerrar_sesión: "Logout",
        Nombre_y_alias: "Name and Alias",
        Cambiar_Email: "Change Email",
        Cambiar_contraseña: "Change Password",
        Terminos_y_condiciones: "Terms and Conditions",
        Politica_de_privacidad: "Privacy Policy",
        Mis_suscripciones: "My Subscriptions",
        Eliminar_mi_cuenta: "Delete My Account",
      },
      Aim: {
        Objetivo_de_salud: "Health Goal",
        Cuál_es_tu_objetivo: "What is your goal?",
        Perder_grasa: "Lose Fat",
        ganar_musculo: "Gain Muscle",
        reducir_peso_corporal_y_grasa: "Reduce Body Weight and Fat",
        incrementa_mi_masa_muscular: "Increase My Muscle Mass",
        mejorar_mi_condicion: "Improve My Fitness",
        mantenimiento_y_tonificacion: "Maintenance and Toning",
        Tus_datos_metabólicos:
          "Your metabolic data is essential to calculate your daily caloric intake.",
        Desea_modificar_su_objetivo: "Do you want to modify your objective?",
        Cambio: "This change will modify the objective of your diet",
      },
      Guardar: { Guardar: "Save" },
      CustomizeApp: {
        personalizar_tu_cuenta: "Customize Your Account",
        Elige_tu_tema_favorito: "Choose Your Favorite Theme",
        Elige_tu_idioma: "Choose Your Language",
      },
      MetabolicProfile: {
        Perfil_Metabolico: "Metabolic Profile",
        Tus_datos_metabolicos:
          "Your metabolic data is essential to calculate your daily calorie intake",
        años: "years",
        Kg: "Kg",
        Cm: "cm",
        Entreno: "Training",
        entrenos_por_semana: "training per week",
        pasos_por_semana: "steps per week",
        Calorias_diarias_necesarias: "Necessary daily calories",
        De_acuerdo_a_tu_objetivo:
          "According to your goal, metabolism, and activity, your body needs this daily amount of calories",
        Kcal: "Kcal",
        Como_calculamos_tu_ingesta:
          "How do we calculate your daily calorie intake?",
        Entre: "Between",
        man: "Man",
        women: "Women",
      },
      WeightControl: {
        Control_de_peso: "Weight Control",
        Actualmente_pesas: "Currently Weigh",
        Registros: "Records",
        Agregar_peso: "Add weight",
        Ingrese_Nuevo_Peso: "Enter your new weight",
        Nuevo_Peso: "New Weight",
      },
      NameAlias: {
        Nombre_y_alias: "Name and Alias",
        Como_te_llemas:
          "How do you call yourself and how do you want us to refer to you",
        Nombre: "Name",
        Apellido: "Surname",
        Alias: "Alias",
        PasswordChange: "Password Change",
      },
      PasswordChange: {
        Cambiar_contraseña: "Change Password",
        Contraseña_actual: "Current Password",
        Nueva_Contraseña: "New Password",
        Confirmar_Contraseña: "Confirm Password",
      },
      ProfileTraining: {
        Perfil_de_Entrenamiento: "Training Profile",
        Lugar_de_entrenamiento: "Training Place",
        Nivel: "Level",
        Nivel_de_peso: "Weight Level",
        Genero_de_tu_entrenador: "Your coach's gender",
        home: "Home",
        gym: "Gym",
        beginner: "Begginer",
        regular: "Intermedio",
        advanced: "Advanced",
      },
      TrainingPlace: {
        Lugar_de_entrenamiento: "Training Place",
        Donde_vas_a_entrenar: "Where do you train?",
        Seleccione_el_lugar: "Select the place where you usually train",
        Casa: "Home",
        Entreno_con_equipamiento_domestico: "Train with home equipment",
        Gimnasio: "Gym",
        Voy_al_gym_o_tengo_un_gym_en_casa:
          "I go to the gym or have a gym at home",
        Do_you_want_to_change_your_training_place:
          "Do you want to change your training place?",
        Change: "This change will modify the Training Place",
      },
      Intensity: {
        Nivel: "Level",
        Con_que_intensidad_entrena: "How intensely do you train?",
        Intensidad_de_entrenamiento: "Training intensity",
        Iniciacion: "Begginer",
        Llevo_poco_tiempo_entrenando: "I've been training for a short time",
        Intermedio: "Intermedio",
        Llevo_algunos_meses_entrenando: "I've been training for some months",
        Avanzado: "Advanced",
        Levo_muchos_años_entrenando: "I've been training for many years",
        Do_you_want_to_change_your_level: "Do you want to change your level?",
        Change: "This change will modify the level of training",
      },
      WeightLevel: {
        Nivel_de_peso: "Weight Level",
        Cuan_duro_quieres_entrenar: "How hard do you want to train?",
        En_base_a_tu_respuesta:
          "Based on your answer, we will adjust the weight load for each exercise, and you can update the weight as you progress",
        Estoy_empezando: "I'm starting",
        Tengo_poca_experiencia:
          "I have little experience and prefer to start training gently. There's time; I'll gradually increase it.",
        Entreno_Normal: "Normal Training",
        Prefiero_empezar:
          "I prefer to start with moderate weights and increase them week by week.",
        Me_gusta_entrenar_fuerte: "I like to train hard",
        Quiero_entrenar_con_pesos:
          "I want to train with heavy weights, but with care",
        Quiero_entrenar_muy_duro: "I want to train very hard",
        Quiero_entrenar_con_el_maximo_peso_posible:
          "I want to train with the maximum possible weight. I have a lot of experience, train hard, and master the technique",
      },
      CoachGender: {
        Genero_de_tu_entrenador: "Your coach's gender",
        Tienes_alguna_preferencia:
          "Do you have any preference for your coach's gender?",
        Masculino: "Male",
        Femenino: "Female",
      },
      Tribu: {
        Training: "Training",
        About_Me: "About Me",
        Product: "Product",
        Plan: "Plan",
        Presentation:
          "Sport and discipline have always been a part of my life. However, the turning point came when I discovered martial arts and weightlifting. I competed in bodybuilding from 2015 to 2023, a period that challenged me and taught me a lot about discipline and dedication. 8 years ago, I turned my passion into my profession, working with more than 5,000 clients, helping them to transform their bodies and lifestyles. With a Master's degree in Sports Nutrition and Bodybuilding and Fitness, and a specialization in Biomechanics and Kinesiology, I deepened my knowledge to provide the best possible support. Today, with more than 7 years of experience in Nutrition and Personal Training, my goal is to help even more people achieve their best versions.",
      },
      ProductScreen: {
        Asesoria_de_Entrenamiento_y_Nutricion:
          "Training and Nutrition Counseling",
        Guia_para_un_Estilo_de_Vida_Saludable: "Guide for a Healthy Lifestyle",
      },
      UserTrainings: {
        No_estas_anotado_a_ningun_entrenamiento:
          "You are not enrolled in any training",
        Revisa_los_entrenamientos: "Check the recommended trainings for you",
        Tus_Entrenos: "Your Workouts",
      },
      Slider: {
        No_contamos_con_entrenamientos_para_ti:
          "We do not have trainings for you",
        No_contamos: "We do not have trainings based on your specifications",
      },
      EmailChange: {
        Cambiar_email: "Change Email",
        Tu_email: "Your current email is:",
        Contraseña: "Password",
        Nuevo: "New Email",
        Confirmar_email: "Confirm Email",
      },
      Favorites: { Training: "Workouts", Foods: "Foods" },
      TrainingsFav: {
        TrainingsFav: "You don't have any favorite workouts",
      },
      FoodsFav: {
        FoodsFav: "You don't have any favorite recipes",
      },
      TrainingSign: {
        Metodo: "Method",
        Con: "With",
        Semanas: "Weeks",
        Apuntame: "Sign me up",
        Resumen_del_programa: "Program Summary",
        Entrenos_para: "Workouts for",
        entrenos_por_semana: "Workouts per week",
        Entrenos_de: "Workouts of",
        Repite_en_su_orden_los: "Repeat in order the",
        entrenos_semanales_durante: "weekly workouts during",
        semanas: "weeks",
        Do_you_want_to_subscribe_to_the_training:
          "Do you want to subscribe to the training?",
      },
      StripWar: {
        Contrata_tu_plan: "Subscribe to your BASIC",
        Entrena_conmigo: "Train with me",
        Mis_mejores: "My best workouts on your phone",
        Plan_de_nutricion: "Personal nutrition plan",
        Suscribirse: "SUBSCRIBE",
      },
      AppManager: { entrenos: "Workouts", Nutricion: "Nutrition" },

      Excercise: {
        Detalles_del_ejercicio: "Exercise Details",
        EQUIPAMIENTOS_NECESARIOS: "NECESSARY EQUIPMENT",
        GRUPO_MUSCULAR: "MUSCLE GROUP",
      },
      TrainingComponents: { Dia: "Day", Hoy: "Today" },
      TrainingSlider: { Metodo: "Method" },
      TrainingUserTraining: { Metodo: "Method" },
      GroupTrainingDetails: {
        Metodo: "Method",
        Con: "With",
        semanas: "weeks",
        Apuntame: "Sign me up",
        Resumen_del_programa: "Program Summary",
        Repite_en_su_orden: "Repeat in order the",
        entrenos_semanales: " weekly workouts during the",
      },
      TrainingDetails: {
        Entrenamiento: "Training",
        ejercicios: "exercises",
        Empezar_entrenamiento: "Start training",
        Ejercicios: "Exercises",
        Realiza_en_orden: "Perform in order the",
        ejercicios_con: "exercises with their respective breaks",
      },
      TrainingStart: {
        EXCERCISE: "EXCERCISE",
        SERIES: "SERIES",
        BREAK: "BREAK",
      },
      TrainingFinish: {
        Well_done: "Well done",
        You_have_completed_the_training: "You have completed the training",
      },
      Toast: {
        Modify: "Modify",
        Delete: "Delete",
        Add: "Add",
        Diet_goal_was_modified: "Diet goal was modified",
        Training_place_was_modified: "Training place was modified",
        Level_was_modified: "Level was modified",
        Error_login: "Error login",
        Email_or_password_was_not_correct: "Email or password was not correct",
        Error_register: "Error register",
        An_error_occurred_while_registering:
          "An error occurred while registering",
        Verify_password:
          "Verify that the password matches and is at least 5 characters long.",
        Subscription: "Subscription",
        Successful_training_subscription: "Successful training subscription",
        Requires_the_BASIC_plan: "Requires the BASIC plan",
        Purchase_the_basic_plan_to_use_the_weight_recording_function:
          "Purchase the basic plan to use the weight recording function",
      },
    },
    es: {
      Alert: {
        Subscribe: "Subscribirse",
        Cancel: "Cancelar",
        Modify: "Modificar",
        Delete: "Eliminar",
        You_want_to_modify_the_data: "Desea modificar los datos?",
        Do_you_want_to_delete_the_weight_record:
          "Desea eliminar el registro de peso?",
        This_action_can_not_be_undone: "Esta accion no se puede deshacer",
      },
      ContactHelp: {
        contact_help: "Contacto y ayuda",
        common_questions: "Dudas más habituales",
        how_do_we_communicate: "¿Cómo nos comunicamos?",
        access_telegram_community: "¿Cómo acceder a la comunidad en Telegram?",
        why_not_a_diet: "¿Por qué el plan no es una dieta?",
        want_to_train: "Y si quiero entrenar...",
        where_is_my_nutritional_plan: "¿Dónde está mi plan nutricional?",
        when_do_i_receive_my_nutritional_plan:
          "¿Cuándo recibo mi plan nutricional?",
        help_desk: "Centro de ayuda",
        resolve_your_common_doubts: "Resuelve tus dudas más habituales",
      },
      FeedingTips: {
        Tips_para_una_alimentación_saludable:
          "Tips para una alimentación saludable",
        El_tip_más_importante_es_que_generes_una_relación_sana:
          "El tip más importante es que generes una relación sana con la alimentación para que cuidarte sea un placer y no un suplicio ¡vamos a ello!",
        Planifica_tus_comidas: "Planifica tus comidas",
        Te_ayuda_a_mantener_una_alimentacion_saludable:
          "Te ayuda a mantener una alimentación saludable, ya que te permite organizarte mejor e incorporar macronutrientes y micronutrientes (proteínas, grasas saludables, lípidos, etc.) que te aporten energía y vitalidad.",
        Come_porciones_adecuadas: "Come porciones adecuadas",
        Evita_comer_en_exceso:
          "Evita comer en exceso. Escucha a tu cuerpo y come cuando tengas hambre, pero para cuando te sientas satisfecho.",
        Limita_el_consumo_de_alimentos_procesados:
          "Limita el consumo de alimentos procesados",
        Contienen_altas_cantidades_de_azúcares_grasas:
          "Contienen altas cantidades de azúcares grasas saturadas y aditivos artificiales perjudiciales para la salud",
        Bebe_suficiente_agua: "Bebe suficiente agua",
        El_agua_es_esencial_para_mantener_el_cuerpo_hidratado:
          "El agua es esencial para mantener el cuerpo hidratado y para el buen funcionamiento de los órganos. Trata de beber al menos 2 litros de agua al dia.",
      },
      Days: {
        Sun: "Dom",
        Mon: "Lun",
        Tue: "Mar",
        Wed: "Mié",
        Thu: "Jue",
        Fri: "Vie",
        Sat: "Sáb",
      },
      Training: {
        Metodo: "Metodo ",
      },
      Recommendeds: {
        Recommendeds: "Recomendado",
      },
      Nutrition: {
        Recomendadas: "Recomendadas",
        Omnivoro: "Omnivoro 2621 Kcal",
        Desayuno: "Desayuno",
        Merienda: "Merienda",
        Lunch: "Almuerzo",
        Cena: "Cena",
        Postre: "Postre",
        Subscribase_al_plan:
          "Subscribase al plan BASIC para utilizar la seccion de nutricion",
      },

      NutritionDetails: {
        Cerrar: "Cerrar",
        Receta: "Receta",
        Preparación: "Preparación",
        Ingredients: "Ingredientes",
        De: "de ",
        No_contiene: "No contiene",
      },
      Login: {
        Introduce_tu_email_y_contraseña: "Introduce tu email y contraseña",
        place: "Contraseña",
        Olvidaste_tu_contraseña: "¿Olvidaste tu contraseña?",
        Iniciar_Sesion: "Iniciar Sesion",
        No_tienes_cuenta: "¿No tienes cuenta?",
        Registrate: "Registrate",
      },
      Register: {
        Crea_tu_perfil_y_empieza_a_entrenar:
          "Crea tu perfil y empieza a entrenar",
        Crear_cuenta: "Crear cuenta",
        Tienes_cuenta: "¿Tienes cuenta?",
        Inicia_sesion: "Inicia sesion",
      },
      StepOne: {
        Como_quieres_que_nos_dirijamos_a_ti:
          "Como quieres que nos dirijamos a ti",
        Tu_nombre_o_tu_alias: "Tu nombre o tu alias",
        Editar: "Editar",
        Si_quieres_que_nos_dirijamos:
          "Si quieres que nos dirijamos a ti por tu apodo, es el momento",
      },
      Siguiente: { Siguiente: "Siguiente" },
      StepTwo: {
        Cual_es_tu_sexo_metabolico: "¿Cual es tu sexo metabolico?",
        HombreLabel: "Hombre",
        MujerLabel: "Mujer",
        Basado_en_tu_sexo:
          "Basado en tu sexo metabolico se determinaran los mejores planes de entrenamiento para ti",
      },
      StepThree: {
        Algunos_datos: "Algunos datos sobre ti",
        Con_estos_datos_conseguiremos:
          "Con estos datos conseguiremos saber cuanta energia (kcal) consumes diariamente y asi sugerirte planes de entreno.",
        Fecha_de_nacimiento: "Fecha de nacimiento",
        Altura: "Altura (cm)",
        Peso: "Peso (kg)",
      },
      StepFour: {
        Cual_es_tu_objetivo: "¿Cual es tu objetivo?",
        Te_en_cuenta_que_cualquier_actividad:
          "Te en cuenta que cualquier actividad fisica aumenta la masa muscular,tonifica y mantiene la forma",
        Perder_grasa: "Perder grasa",
        Reducir_peso_corporal_y_grasa: "Reducir peso corporal y grasa",
        Ganar_musculo: "Ganar musculo",
        Incrementar_mi_masa_muscular: "Incrementar mi masa muscular",
        Mantenimiento_y_tonificacion: "Mantenimiento y tonificacion",
        Mejorar_mi_condicion_manteniendo_mi_peso:
          "Mejorar mi condicion manteniendo mi peso",
      },
      StepFive: {
        Cuantos_pasos_caminas_al_dia: "¿Cuantos pasos caminas al dia?",
        Menos_de_5000_pasos_al_dia: "Menos de 5000 pasos al dia",
        Entre_5000_y_10000_pasos_al_dia: "Entre 5000 y 10000 pasos al dia",
        Mas_de_10000_pasos_al_dia: "Mas de 10000 pasos al dia",
      },
      StepSix: {
        Cuantos_dias_entrenas_semanalmente:
          "¿Cuantos dias entrenas semanalmente?",
        Menos_de_3_dias_por_semana: "Menos de 3 dias por semana",
        dias_por_semana_3: "3 dias por semana",
        dias_por_semana_4: "4 dias por semana",
        dias_por_semana_5: "5 dias por semana",
        dias_por_semana_7_6: "6 o 7 dias por semana",
      },
      StepSeven: {
        En_que_nivel_quieres_empezar: "¿En que nivel quieres empezar?",
        Podras_cambiar_el_nivel:
          "Podras cambiar el nivel en cualquier momento. Ante la duda, empieza con el primer nivel y ve subiendo.",
        Iniciacion: "Iniciante",
        No_tengo_mucha_experiencia: "No tengo mucha experiencia",
        Regular: "Intermedio",
        Llevo_algunos_meses_entrenando: "Llevo algunos meses entrenando",
        Avanzado: "Avanzado",
      },
      StepEight: {
        Donde_quieres_entrenar: "¿Donde quieres entrenar?",
        Casa: "Casa",
        Entreno_con_equipamiento_domestico:
          "Entreno con equipamiento domestico",
        Gym: "Gym",
        Voy_al_gym_o_tengo_un_gym_en_casa: "Voy al gym o tengo un gym en casa",
      },
      Account: {
        Perfil: "Perfil",
        Editar: "Editar",
        Perfil_Metabolico: "Perfil Metabolico",
        Objetivo: "Objetivo",
        Registro_de_peso_y_fotos: "Registro de peso",
        Perfil_de_entrenamiento: "Perfil de entrenamiento",
        Cuenta_de_usuario: "Cuenta de usuario",
        Personaliza_la_aplicación: "Personaliza la aplicación",
        Cerrar_sesión: "Cerrar sesión",
        Nombre_y_alias: "Nombre y alias",
        Cambiar_Email: "Cambiar e-mail",
        Cambiar_contraseña: "Cambiar contraseña",
        Terminos_y_condiciones: "Terminos y condiciones",
        Politica_de_privacidad: "Politica de privacidad",
        Mis_suscripciones: "Mis suscripciones",
        Eliminar_mi_cuenta: "Eliminar mi cuenta",
      },
      Aim: {
        Objetivo_de_salud: "Objetivo de salud",
        Cuál_es_tu_objetivo: "¿Cuál es tu objetivo?",
        Perder_grasa: "Perder grasa",
        ganar_musculo: "Ganar musculo",
        reducir_peso_corporal_y_grasa: "Reducir peso corporal y grasa",
        incrementa_mi_masa_muscular: "Incrementa mi masa muscular",
        mejorar_mi_condicion: "Mejorar mi condicion",
        mantenimiento_y_tonificacion: "Mantenimiento y tonificacion",
        Tus_datos_metabólicos:
          "Tus datos metabólicos son esenciales para calcular tu ingesta calórica diaria.",
        Desea_modificar_su_objetivo: "Desea modificar su objetivo?",
        Cambio: "Este cambio modificara el objetivo de su dieta",
      },
      Guardar: { Guardar: "Guardar" },
      CustomizeApp: {
        personalizar_tu_cuenta: "Personaliza tu cuenta",
        Elige_tu_tema_favorito: "Elige tu tema favorito",
        Elige_tu_idioma: "Elige tu idioma",
      },
      MetabolicProfile: {
        Perfil_Metabolico: "Perfil Metabolico",
        Tus_datos_metabolicos:
          "Tus datos metabolicos son esenciales para calcular tu ingesta calorica diaria",
        años: "años",
        Kg: "Kg",
        Cm: "cm",
        Entreno: "Entreno",
        entrenos_por_semana: "entrenos por semana",
        pasos_por_semana: "pasos por semana",
        Calorias_diarias_necesarias: "Calorias diarias necesarias",
        De_acuerdo_a_tu_objetivo:
          "De acuerdo a tu objetivo, tu metabolismo y actividad, tu cuerpo necesita esta cantidad diaria de calorias",
        Kcal: "Kcal",
        Como_calculamos_tu_ingesta:
          "¿Como calculamos tu ingesta calorica diaria?",
        Entre: "Entre",
        man: "Hombre",
        women: "Mujer",
      },
      WeightControl: {
        Control_de_peso: "Control de peso",
        Actualmente_pesas: " Actualmente Pesas",
        Registros: "Registros",
        Agregar_peso: "Agregar peso",
        Ingrese_Nuevo_Peso: "Ingrese su Nuevo Peso",
        Nuevo_Peso: "Nuevo Peso",
      },
      NameAlias: {
        Nombre_y_alias: "Nombre y alias",
        Como_te_llemas: "Como te llamas y como quieres que nos refiramos a ti",
        Nombre: "Nombre",
        Apellido: "Apellido",
        Alias: "Alias",
        PasswordChange: "PasswordChange",
      },
      PasswordChange: {
        Cambiar_contraseña: "Cambiar contraseña",
        Contraseña_actual: "Contraseña actual",
        Nueva_Contraseña: "Nueva Contraseña",
        Confirmar_Contraseña: "Confirmar Contraseña",
      },
      ProfileTraining: {
        Perfil_de_Entrenamiento: "Perfil de Entrenamiento",
        Lugar_de_entrenamiento: "Lugar de entrenamiento",
        Intensidad: "Intensidad",
        Nivel_de_peso: "Nivel de peso",
        Genero_de_tu_entrenador: "Genero de tu entrenador",
        Nivel: "Nivel",
        home: "Casa",
        gym: "Gym",
        beginner: "Iniciante",
        regular: "Intermedio",
        advanced: "Avanzado",
      },
      TrainingPlace: {
        Lugar_de_entrenamiento: "Lugar de entrenamiento",
        Donde_vas_a_entrenar: "¿Donde vas a entrenar?",
        Seleccione_el_lugar: "Seleccione el lugar donde entrenas habitualmente",
        Casa: "Casa",
        Entreno_con_equipamiento_domestico:
          "Entreno con equipamiento domestico",
        Gimnasio: "Gimnasio",
        Voy_al_gym_o_tengo_un_gym_en_casa: "Voy al gym o tengo un gym en casa",
        Do_you_want_to_change_your_training_place:
          "Desea modificar su lugar de entreno?",
        Change: "Este cambio modificara el Lugar de los entrenos",
      },
      Intensity: {
        Nivel: "Nivel",
        Con_que_intensidad_entrena: "Con que intesidad entrena?",
        Intensidad_de_entrenamiento: "Intensidad de entrenamiento",
        Iniciacion: "Iniciante",
        Llevo_poco_tiempo_entrenando: "Llevo poco tiempo entrenando",
        Intermedio: "Intermedio",
        Llevo_algunos_meses_entrenando: "Llevo algunos meses entrenando",
        Avanzado: "Avanzado",
        Levo_muchos_años_entrenando: "Levo muchos años entrenando",
        Do_you_want_to_change_your_level: "Desea modificar su nivel?",
        Change: "Este cambio modificara el de entreno",
      },
      WeightLevel: {
        Nivel_de_peso: "Nivel de peso",
        Cuan_duro_quieres_entrenar: "¿Cuan duro quieres entrenar?",
        En_base_a_tu_respuesta:
          "En base a tu respuesta ajustaremos la carga de peso de cada ejercicio y podras actualizar el peso conforme progreses",
        Estoy_empezando: "Estoy empezando",
        Tengo_poca_experiencia:
          "Tengo poca experiencia y prefiero empezar a entrenar suave. Hay tiempo, ya lo ire subiendo.",
        Entreno_Normal: "Entreno Normal",
        Prefiero_empezar:
          "Prefiero empezar con pesos medios e irlos subiendo semana a semana.",
        Me_gusta_entrenar_fuerte: "Me gusta entrenar fuerte",
        Quiero_entrenar_con_pesos:
          "Quiero entrenar con pesos elevados, pero con cuidado",
        Quiero_entrenar_muy_duro: "Quiero entrenar muy duro",
        Quiero_entrenar_con_el_maximo_peso_posible:
          "Quiero entrenar con el maximo peso posible. Tengo mucha experiencia, ntreno duro y domino la tecnica",
      },
      CoachGender: {
        Genero_de_tu_entrenador: "Genero de tu entrenador",
        Tienes_alguna_preferencia:
          "¿Tienes alguna preferencia con el genero de tu entrenador?",
        Masculino: "Masculino",
        Femenino: "Femenino",
      },
      Tribu: {
        Training: "Entrenamiento",
        About_Me: "Sobre mi",
        Product: "Producto",
        Plan: "Plan",
        Presentation:
          "Desde siempre, el deporte y la disciplina han sido parte de mi vida. Sin embargo, el punto de inflexión llegó cuando descubrí las artes marciales y el levantamiento de pesas. Competí en fisicoculturismo de 2015 a 2023, un período que me desafió y me enseñó mucho sobre disciplina y dedicación. Hace 8 años, transformé mi pasión en mi profesión, trabajando con más de 5.000 clientes, ayudándoles a transformar sus cuerpos y estilos de vida. Con una Maestría en Nutrición Deportiva y Musculación y Fitness, y una especialización en Biomecánica y Cinesiología, profundicé mis conocimientos para ofrecer el mejor soporte posible. Hoy, con más de 7 años de experiencia en Nutrición y Entrenamiento Personal, mi objetivo es ayudar a aún más personas a alcanzar sus mejores versiones.",
      },
      ProductScreen: {
        Asesoria_de_Entrenamiento_y_Nutricion:
          "Asesoria de Entrenamiento y Nutricion",
        Guia_para_un_Estilo_de_Vida_Saludable:
          "Guia para un Estilo de Vida Saludable",
      },
      UserTrainings: {
        No_estas_anotado_a_ningun_entrenamiento:
          "No estas anotado a ningun entrenamiento",
        Revisa_los_entrenamientos:
          "Revisa los entrenamientos recomendados para ti",
        Tus_Entrenos: "Tus Entrenos",
      },
      Slider: {
        No_contamos_con_entrenamientos_para_ti:
          "No contamos con entrenamientos para ti",
        No_contamos:
          " No contamos con entrenamientos basados en tus especificaciones",
      },
      EmailChange: {
        Cambiar_email: "Cambiar e-mail",
        Tu_email: " Tu e-mail actual es:",
        Contraseña: "Contraseña",
        Nuevo: "Nuevo e-mail",
        Confirmar_email: "Confirmar e-mail",
      },
      Favorites: { Training: "Entrenamientos", Foods: "comidas" },
      TrainingsFav: { TrainingsFav: "No tienes entrenamientos en favoritos" },
      FoodsFav: { FoodsFav: "No tienes recetas en favoritos" },
      TrainingSign: {
        Metodo: "Metodo",
        Con: "Con",
        Semanas: "Semanas",
        Apuntame: "Apuntame",
        Resumen_del_programa: "Resumen del programa",
        Entrenos_para: "Entrenos para",
        entrenos_por_semana: "Entrenos por semana",
        Entrenos_de: "Entrenos de",
        Repite_en_su_orden_los: "Repite en su orden los",
        entrenos_semanales_durante: "entrenos semanales durante",
        semanas: "semanas",
        Do_you_want_to_subscribe_to_the_training:
          "Desea subscribirse al entrenamiento?",
      },
      StripWar: {
        Contrata_tu_plan: "Contrata tu plan BASIC",
        Entrena_conmigo: "Entrena conmigo",
        Mis_mejores: "Mis mejores entrenos en tu movil",
        Plan_de_nutricion: "Plan de nutricion personal",
        Suscribirse: "SUSCRIBIRSE",
      },
      AppManager: { entrenos: "Entrenos", Nutricion: "Nutricion" },
      Excercise: {
        Detalles_del_ejercicio: "Detalles del ejercicio",
        EQUIPAMIENTOS_NECESARIOS: "EQUIPAMIENTOS NECESARIOS",
        GRUPO_MUSCULAR: "GRUPO MUSCULAR",
      },
      TrainingComponents: { Dia: "Dia", Hoy: "Hoy" },
      TrainingSlider: { Metodo: "Metodo" },
      GroupTrainingDetails: {
        Metodo: "Metodo",
        Con: "Con",
        semanas: "semanas",
        Apuntame: "Apuntame",
        Resumen_del_programa: "Resumen del programa",
        Repite_en_su_orden: "Repite en su orden los",
        entrenos_semanales: " entrenos semanales durante las",
      },
      TrainingDetails: {
        Entrenamiento: "Entrenamiento",
        ejercicios: "ejercicios",
        Empezar_entrenamiento: "Empezar entrenamiento",
        Ejercicios: "Ejercicios",
        Realiza_en_orden: "Realiza en orden los",
        ejercicios_con: "ejercicios con sus respectivos descansos",
      },
      TrainingStart: {
        EXCERCISE: "EJERCICIO",
        SERIES: "SERIES",
        BREAK: "DESCANSO",
      },
      TrainingFinish: {
        Well_done: "Bien Hecho",
        You_have_completed_the_training: "Has completado el entrenamiento",
      },
      Toast: {
        Modify: "Modificado",
        Delete: "Eliminado",
        Add: "Agregado",
        Diet_goal_was_modified: "Se modifico el objetivo de dieta",
        Training_place_was_modified: "Se modifico el lugar de entrenamiento",
        Level_was_modified: "Se modifico el nivel de entrenamiento",
        Error_login: "Error al ingresar",
        Email_or_password_was_not_correct: "Email o contraseña incorrecta",
        Error_register: "Error al registrarse",
        An_error_occurred_while_registering: "Ocurrio un error al registrarse",
        Email_not_valid: "El Email no es valido",
        Verify_password:
          "Verifica que la contraseña coincida y tenga al menos 5 caracteres.",
        Subscription: "Subscripcion",
        Successful_training_subscription:
          "Subscripcion exitosa al entrenamiento",
        Requires_the_BASIC_plan: "Requiere del plan BASIC",
        Purchase_the_basic_plan_to_use_the_weight_recording_function:
          "Contrate el plan basic para utilizar la funcion de registro de peso",
      },
    },
    pr: {
      Alert: {
        Subscribe: "Se inscrever",
        Cancel: "Cancelar",
        Modify: "Modificar",
        Delete: "Eliminar",
        You_want_to_modify_the_data: "Deseja modificar os dados?",
        Do_you_want_to_delete_the_weight_record:
          "Deseja excluir o registro de peso?",
        This_action_can_not_be_undone: "Essa ação não pode ser desfeita",
      },
      ContactHelp: {
        contact_help: "Contato e Ajuda",
        common_questions: "Perguntas Frequentes",
        how_do_we_communicate: "Como nos comunicamos?",
        access_telegram_community: "Como acessar a comunidade do Telegram?",
        why_not_a_diet: "Por que o plano não é uma dieta?",
        want_to_train: "E se eu quiser treinar...",
        where_is_my_nutritional_plan: "Onde está meu plano nutricional?",
        when_do_i_receive_my_nutritional_plan:
          "Quando receberei meu plano nutricional?",
        help_desk: "Central de Ajuda",
        resolve_your_common_doubts: "Resolva suas dúvidas comuns",
      },
      FeedingTips: {
        Tips_para_una_alimentación_saludable:
          "Dicas para uma alimentação saudável",
        El_tip_más_importante_es_que_generes_una_relación_sana:
          "A dica mais importante é construir um relacionamento saudável com a comida, para que cuidar de si mesmo seja um prazer, não um fardo. Vamos lá!",
        Planifica_tus_comidas: "Planeje suas refeições",
        Te_ayuda_a_mantener_una_alimentacion_saludable:
          "Ajuda a manter uma alimentação saudável, permitindo que você se organize melhor e incorpore macronutrientes e micronutrientes (proteínas, gorduras saudáveis, lipídios, etc.) que proporcionem energia e vitalidade.",
        Come_porciones_adecuadas: "Coma porções adequadas",
        Evita_comer_en_exceso:
          "Evite comer em excesso. Ouça o seu corpo e coma quando estiver com fome, mas pare quando estiver satisfeito.",
        Limita_el_consumo_de_alimentos_procesados:
          "Limite o consumo de alimentos processados",
        Contienen_altas_cantidades_de_azúcares_grasas:
          "Eles contêm altas quantidades de açúcares, gorduras saturadas e aditivos artificiais prejudiciais à saúde",
        Bebe_suficiente_agua: "Beba água suficiente",
        El_agua_es_esencial_para_mantener_el_cuerpo_hidratado:
          "A água é essencial para manter o corpo hidratado e garantir o bom funcionamento dos órgãos. Tente beber pelo menos 2 litros de água por dia.",
      },
      Days: {
        Sun: "Dom",
        Mon: "Seg",
        Tue: "Ter",
        Wed: "Qua",
        Thu: "Qui",
        Fri: "Sex",
        Sat: "Sáb",
      },
      Training: {
        Metodo: "Método ",
      },
      Recommendeds: {
        Recommendeds: "Recomendado",
      },
      Nutrition: {
        Omnivoro: "Onívoro 2621 Kcal",
        Desayuno: "Café da manhã",
        Merienda: "Lanche",
        Lunch: "Almoço",
        Cena: "Jantar",
        Postre: "Sobremesa",
        Recomendadas: "Recomendadas",
        Subscribase_al_plan:
          "Assine o plano BASIC para usar a seção de nutrição",
      },
      NutritionDetails: {
        Cerrar: "Fechar",
        Receta: "Receita",
        Preparación: "Preparação",
        Recomendadas: "Recomendadas",
        Ingredients: "Ingredientes",
        De: "de ",
        No_contiene: "Não têm",
      },
      Login: {
        Introduce_tu_email_y_contraseña: "Digite seu e-mail e senha",
        place: "Senha",
        Olvidaste_tu_contraseña: "Esqueceu sua senha?",
        Iniciar_Sesion: "Iniciar Sessão",
        No_tienes_cuenta: "Não tem uma conta?",
        Registrate: "Registre-se",
      },
      Register: {
        Crea_tu_perfil_y_empieza_a_entrenar:
          "Crie seu perfil e comece a treinar",
        Crear_cuenta: "Criar conta",
        Tienes_cuenta: "Já tem uma conta?",
        Inicia_sesion: "Faça login",
      },
      StepOne: {
        Como_quieres_que_nos_dirijamos_a_ti:
          "Como você quer que nos referimos a você",
        Tu_nombre_o_tu_alias: "Seu nome ou apelido",
        Editar: "Editar",
        Si_quieres_que_nos_dirijamos:
          "Se você quiser que nos refiramos a você pelo seu apelido, é a hora",
      },
      Siguiente: { Siguiente: "Próximo" },
      StepTwo: {
        Cual_es_tu_sexo_metabolico: "Qual é o seu sexo metabólico?",
        HombreLabel: "Homem",
        MujerLabel: "Mulher",
        Basado_en_tu_sexo:
          "Com base no seu sexo metabólico, os melhores planos de treino para você serão determinados.",
      },
      StepThree: {
        Algunos_datos: "Alguns dados sobre você",
        Con_estos_datos_conseguiremos:
          "Com esses dados, conseguiremos saber quantas calorias (kcal) você consome diariamente e sugerir planos de treinamento.",
        Fecha_de_nacimiento: "Data de Nascimento",
        Altura: "Altura (cm)",
        Peso: "Peso (kg)",
      },
      StepFour: {
        Cual_es_tu_objetivo: "Qual é o seu objetivo?",
        Te_en_cuenta_que_cualquier_actividad:
          "Lembre-se de que qualquer atividade física aumenta a massa muscular, tonifica e mantém a forma.",
        Perder_grasa: "Perder gordura",
        Reducir_peso_corporal_y_grasa: "Reduzir peso corporal e gordura",
        Ganar_musculo: "Ganhar músculo",
        Incrementar_mi_masa_muscular: "Aumentar minha massa muscular",
        Mantenimiento_y_tonificacion: "Manutenção e tonificação",
        Mejorar_mi_condicion_manteniendo_mi_peso:
          "Melhorar minha condição mantendo meu peso",
      },
      StepFive: {
        Cuantos_pasos_caminas_al_dia: "Quantos passos você dá por dia?",
        Menos_de_5000_pasos_al_dia: "Menos de 5000 passos por dia",
        Entre_5000_y_10000_pasos_al_dia: "Entre 5000 e 10000 passos por dia",
        Mas_de_10000_pasos_al_dia: "Mais de 10000 passos por dia",
      },
      StepSix: {
        Cuantos_dias_entrenas_semanalmente:
          "Quantos dias você treina por semana?",
        Menos_de_3_dias_por_semana: "Menos de 3 dias por semana",
        dias_por_semana_3: "3 dias por semana",
        dias_por_semana_4: "4 dias por semana",
        dias_por_semana_5: "5 dias por semana",
        dias_por_semana_7_6: "6 ou 7 dias por semana",
      },
      StepSeven: {
        En_que_nivel_quieres_empezar: "Em que nível você quer começar?",
        Podras_cambiar_el_nivel:
          "Você poderá mudar o nível a qualquer momento. Em caso de dúvida, comece com o primeiro nível e vá subindo.",
        Iniciacion: "Iniciante",
        No_tengo_mucha_experiencia: "Não tenho muita experiência",
        Regular: "Intermedio",
        Llevo_algunos_meses_entrenando: "Treino há alguns meses",
        Avanzado: "Avançado",
      },
      StepEight: {
        Donde_quieres_entrenar: "Onde você quer treinar?",
        Casa: "Casa",
        Entreno_con_equipamiento_domestico: "Treino com equipamento doméstico",
        Gym: "Gym",
        Voy_al_gym_o_tengo_un_gym_en_casa:
          "Vou para a academia ou tenho uma academia em casa",
      },
      Account: {
        Perfil: "Perfil",
        Editar: "Editar",
        Perfil_Metabolico: "Perfil Metabólico",
        Objetivo: "Objetivo",
        Registro_de_peso_y_fotos: "Registro de Peso",
        Perfil_de_entrenamiento: "Perfil de Treino",
        Cuenta_de_usuario: "Conta de Usuário",
        Personaliza_la_aplicación: "Personalize o Aplicativo",
        Cerrar_sesión: "Encerrar Sessão",
        Nombre_y_alias: "Nome e Apelido",
        Cambiar_Email: "Alterar E-mail",
        Cambiar_contraseña: "Alterar Senha",
        Terminos_y_condiciones: "Termos e Condições",
        Politica_de_privacidad: "Política de Privacidade",
        Mis_suscripciones: "Minhas Assinaturas",
        Eliminar_mi_cuenta: "Excluir Minha Conta",
      },
      Aim: {
        Objetivo_de_salud: "Objetivo de Saúde",
        Cuál_es_tu_objetivo: "Qual é o seu objetivo?",
        Perder_grasa: "Perder Gordura",
        ganar_musculo: "Ganhar Músculo",
        reducir_peso_corporal_y_grasa: "Reduzir Peso Corporal e Gordura",
        incrementa_mi_masa_muscular: "Aumentar Minha Massa Muscular",
        mejorar_mi_condicion: "Melhorar Minha Condição",
        mantenimiento_y_tonificacion: "Manutenção e Tonificação",
        Tus_datos_metabólicos:
          "Seus dados metabólicos são essenciais para calcular sua ingestão calórica diária.",
        Desea_modificar_su_objetivo: "Quer modificar seu objetivo?",
        Cambio: "Essa mudança modificará o objetivo da sua dieta",
      },
      Guardar: { Guardar: "Salvar" },
      CustomizeApp: {
        personalizar_tu_cuenta: "Personalize Sua Conta",
        Elige_tu_tema_favorito: "Escolha Seu Tema Favorito",
        Elige_tu_idioma: "Escolha Seu Idioma",
      },
      MetabolicProfile: {
        Perfil_Metabolico: "Perfil Metabólico",
        Tus_datos_metabolicos:
          "Seus dados metabólicos são essenciais para calcular sua ingestão calórica diária",
        años: "anos",
        Kg: "Kg",
        Cm: "cm",
        Entreno: "Treino",
        entrenos_por_semana: "treinos por semana",
        pasos_por_semana: "passos por semana",
        Calorias_diarias_necesarias: "Calorias diárias necessárias",
        De_acuerdo_a_tu_objetivo:
          "De acordo com seu objetivo, metabolismo e atividade, seu corpo precisa dessa quantidade diária de calorias",
        Kcal: "Kcal",
        Como_calculamos_tu_ingesta:
          "Como calculamos sua ingestão calórica diária?",
        Entre: "Entre",
        man: "Homem",
        women: "Mulher",
      },
      WeightControl: {
        Control_de_peso: "Controle de Peso",
        Actualmente_pesas: "Atualmente Pesa",
        Registros: "Registros",
        Agregar_peso: "Adicionar peso",
        Ingrese_Nuevo_Peso: "Digite seu novo peso",
        Nuevo_Peso: "Novo Peso",
      },
      NameAlias: {
        Nombre_y_alias: "Nome e Apelido",
        Como_te_llemas:
          "Como você se chama e como deseja que nos refiramos a você",
        Nombre: "Nome",
        Apellido: "Sobrenome",
        Alias: "Apelido",
        PasswordChange: "Mudança de Senha",
      },
      PasswordChange: {
        Cambiar_contraseña: "Alterar Senha",
        Contraseña_actual: "Senha Atual",
        Nueva_Contraseña: "Nova Senha",
        Confirmar_Contraseña: "Confirmar Senha",
      },
      ProfileTraining: {
        Perfil_de_Entrenamiento: "Perfil de Treino",
        Lugar_de_entrenamiento: "Local de Treino",
        Nivel: "Nivel",
        Nivel_de_peso: "Nível de Peso",
        Genero_de_tu_entrenador: "Gênero do Seu Treinador",
        home: "Casa",
        gym: "Gym",
        beginner: "Iniciante",
        regular: "Intermedio",
        advanced: "Avançado",
      },
      TrainingPlace: {
        Lugar_de_entrenamiento: "Local de Treino",
        Donde_vas_a_entrenar: "Onde você treina?",
        Seleccione_el_lugar: "Selecione o local onde você treina habitualmente",
        Casa: "Casa",
        Entreno_con_equipamiento_domestico: "Treino com Equipamento Doméstico",
        Gimnasio: "Gym",
        Voy_al_gym_o_tengo_un_gym_en_casa:
          "Vou para a academia ou tenho uma academia em casa",
        Do_you_want_to_change_your_training_place:
          "Quer mudar seu local de treinamento?",
        Change: "Esta mudança modificará o Local de Treinamento",
      },
      Intensity: {
        Nivel: "Nível",
        Con_que_intensidad_entrena: "Com que intensidade você treina?",
        Intensidad_de_entrenamiento: "Intensidade de treinamento",
        Iniciacion: "Iniciante",
        Llevo_poco_tiempo_entrenando: "Treino há pouco tempo",
        Intermedio: "Intermedio",
        Llevo_algunos_meses_entrenando: "Treino há alguns meses",
        Avanzado: "Avançado",
        Levo_muchos_años_entrenando: "Treino há muitos anos",
        Do_you_want_to_change_your_level: "Quer mudar seu nivel?",
        Change: "Esta mudança modificará o nivel de treino",
      },
      WeightLevel: {
        Nivel_de_peso: "Nível de Peso",
        Cuan_duro_quieres_entrenar: "Quão duro você quer treinar?",
        En_base_a_tu_respuesta:
          "Com base em sua resposta, ajustaremos a carga de peso de cada exercício, e você poderá atualizar o peso à medida que avança",
        Estoy_empezando: "Estou começando",
        Tengo_poca_experiencia:
          "Tenho pouca experiência e prefiro começar a treinar suavemente. Há tempo; aumentarei gradualmente.",
        Entreno_Normal: "Treino Normal",
        Prefiero_empezar:
          "Prefiro começar com pesos moderados e aumentá-los semana a semana.",
        Me_gusta_entrenar_fuerte: "Gosto de treinar forte",
        Quiero_entrenar_con_pesos:
          "Quero treinar com pesos pesados, mas com cuidado",
        Quiero_entrenar_muy_duro: "Quero treinar muito forte",
        Quiero_entrenar_con_el_maximo_peso_posible:
          "Quero treinar com o peso máximo possível. Tenho muita experiência, treino duro e domino a técnica",
      },
      CoachGender: {
        Genero_de_tu_entrenador: "Gênero do Seu Treinador",
        Tienes_alguna_preferencia:
          "Você tem alguma preferência quanto ao gênero do seu treinador?",
        Masculino: "Masculino",
        Femenino: "Feminino",
      },
      Tribu: {
        Training: "Treinamento",
        About_Me: "Sobre Mim",
        Product: "Produto",
        Plan: "Plano",
        Presentation:
          "Desde sempre o desporto e a disciplina fizeram parte da minha vida. No entanto, o ponto de inflexão foi quando descobri as artes marciais e a musculação. Competi em fisioculturismo de 2015 a 2023, período que me desafiou e me ensinou muito sobre disciplina e dedicação. Há 8 anos, transformei minha paixão em profissão, trabalhando com mais de 5.000 clientes, ajudando-os a transformar seus corpos e estilos de vida. Com um Mestrado em Nutrição Desportiva e Musculação e Fitness, e uma especialização em Biomecânica e Cinesiologia, aprofundei meus conhecimentos para oferecer o melhor suporte possível. Hoje, com mais de 7 anos de experiência em Nutrição e Personal Training, meu objetivo é ajudar ainda mais pessoas a alcançarem suas melhores versões.",
      },
      ProductScreen: {
        Asesoria_de_Entrenamiento_y_Nutricion:
          "Consultoria de Treinamento e Nutrição",
        Guia_para_un_Estilo_de_Vida_Saludable:
          "Guia para um Estilo de Vida Saudável",
      },
      UserTrainings: {
        No_estas_anotado_a_ningun_entrenamiento:
          "Você não está matriculado em nenhum treinamento",
        Revisa_los_entrenamientos:
          "Confira os treinamentos recomendados para você",
        Tus_Entrenos: "Seus Treinos",
      },
      Slider: {
        No_contamos_con_entrenamientos_para_ti:
          "Não temos treinamentos para você",
        No_contamos: "Não temos treinamentos com base em suas especificações",
      },
      EmailChange: {
        Cambiar_email: "Alterar e-mail",
        Tu_email: "Seu e-mail atual é:",
        Contraseña: "Senha",
        Nuevo: "Novo e-mail",
        Confirmar_email: "Confirmar e-mail",
      },
      Favorites: { Training: "Treinos", Foods: "Alimentos" },
      TrainingsFav: { TrainingsFav: "Você não tem treinos favoritos" },
      FoodsFav: { FoodsFav: "Você não tem receitas favoritas" },
      TrainingSign: {
        Metodo: "Método",
        Con: "Com",
        Semanas: "Semanas",
        Apuntame: "Inscreva-me",
        Resumen_del_programa: "Resumo do programa",
        Entrenos_para: "Treinos para",
        entrenos_por_semana: "Treinos por semana",
        Entrenos_de: "Treinos de",
        Repite_en_su_orden_los: "Repita na ordem os",
        entrenos_semanales_durante: "treinos semanais durante",
        semanas: "semanas",
        Do_you_want_to_subscribe_to_the_training:
          "Quer se inscrever no treinamento?",
      },
      StripWar: {
        Contrata_tu_plan: "Assine seu plano BASIC",
        Entrena_conmigo: "Treine comigo",
        Mis_mejores: "Meus melhores treinos no seu celular",
        Plan_de_nutricion: "Plano de nutrição pessoal",
        Suscribirse: "INSCREVER-SE",
      },
      AppManager: { entrenos: "Treinos", Nutricion: "Nutrição" },

      Excercise: {
        Detalles_del_ejercicio: "Detalhes do exercício",
        EQUIPAMIENTOS_NECESARIOS: "EQUIPAMENTO NECESSÁRIO",
        GRUPO_MUSCULAR: "GRUPO MUSCULAR",
      },
      TrainingComponents: { Dia: "Dia", Hoy: "Hoje" },
      TrainingSlider: { Metodo: "Método" },
      TrainingUserTraining: { Metodo: "Método" },
      GroupTrainingDetails: {
        Metodo: "Método",
        Con: "Com",
        semanas: "semanas",
        Apuntame: "Inscreva-me",
        Resumen_del_programa: "Resumo do programa",
        Repite_en_su_orden: "Repita em ordem os",
        entrenos_semanales: " treinos semanais durante as",
      },
      TrainingDetails: {
        Entrenamiento: "Treinamento",
        ejercicios: "exercícios",
        Empezar_entrenamiento: "Iniciar treinamento",
        Ejercicios: "Exercícios",
        Realiza_en_orden: "Realize em ordem os",
        ejercicios_con: "exercícios com seus respectivos intervalos",
      },
      TrainingStart: {
        EXCERCISE: "EXERCICIO",
        SERIES: "SERIES",
        BREAK: "DESCANSO",
      },
      TrainingFinish: {
        Well_done: "Bem feito",
        You_have_completed_the_training: "Você concluiu o treinamento",
      },
      Toast: {
        Modify: "Modificado",
        Delete: "Removido",
        Add: "Adicionado",
        Diet_goal_was_modified: "Meta de dieta foi modificada",
        Training_place_was_modified: "Local de treino foi modificado",
        Level_was_modified: "Nivel de treino foi modificado",
        Error_login: "Erro de login",
        Email_or_password_was_not_correct: "E-mail ou senha não estão corretos",
        Error_register: "Error de registro",
        An_error_occurred_while_registering: "Ocorreu um erro ao registrar",
        Email_not_valid: "O e-mail não é válido",
        Verify_password:
          "Verifique se a senha corresponde e tem pelo menos 5 caracteres.",
        Subscription: "Inscrição",
        Successful_training_subscription: "Assinatura de treinamento concluída",
        Requires_the_BASIC_plan: "Requer o plano BASIC",
        Purchase_the_basic_plan_to_use_the_weight_recording_function:
          "Adquira o plano basic para usar a função de registro de peso",
      },
    },
  },
  fallbackLng: "pr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
