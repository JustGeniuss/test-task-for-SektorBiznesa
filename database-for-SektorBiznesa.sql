PGDMP                         z            test-for-SektorBiznesa    14.1    14.1     �           0    0    ENCODING    ENCODING     !   SET client_encoding = 'WIN1251';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    26005    test-for-SektorBiznesa    DATABASE     u   CREATE DATABASE "test-for-SektorBiznesa" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
 (   DROP DATABASE "test-for-SektorBiznesa";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    26862    users    TABLE     \  CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    surname character varying(255),
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    sex character varying(255),
    photo character varying(255),
    "dateOfRegistration" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    3            �            1259    26861    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210    3            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    209            \           2604    26865    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �          0    26862    users 
   TABLE DATA           e   COPY public.users (id, name, surname, email, password, sex, photo, "dateOfRegistration") FROM stdin;
    public          postgres    false    210   	       �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 30, true);
          public          postgres    false    209            ^           2606    26871    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    210            `           2606    26869    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            �   �  x�u��r�P���)f���� q�%bD�x��MG�"���c���ĩ�E�������@�S ���D��=P��x[�3 �q><�U�K�u�����v�Έy.��X��*g��կ���R�
1~`�#��U#�O�:TGϲ�$��$��FA�dJ��8_�y���<⓴�:J�%Vcno(V7s�P��8��YU�µ��e��RHҁ��{]�q�)�`{�#&U�� `��\W�\��zIO�UƵ��ES8� ��Հd{~��o���ǫ�A�vǲo�TT�@����Wl-V��Ah�ET���S��&�0�����A�t�0f7 >�=M�k�=�T���j�����*h��Ȉ�.���T�	�Kӫ[�������MRį��>�/~�+q���0�jm��5�?���Ԁ�E-��ɻ�{�,ako�iHaʙ��l�7�xў-�T�q<���px�/�KfDņ����v:��"��     