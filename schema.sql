--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: buyers; Type: TABLE; Schema: public; Owner: djsong15
--

CREATE TABLE public.buyers (
    transaction_id bigint NOT NULL,
    user_id bigint
);


ALTER TABLE public.buyers OWNER TO djsong15;

--
-- Name: carts; Type: TABLE; Schema: public; Owner: djsong15
--

CREATE TABLE public.carts (
    user_id integer,
    listing_id integer,
    quantity integer
);


ALTER TABLE public.carts OWNER TO djsong15;

--
-- Name: listings; Type: TABLE; Schema: public; Owner: djsong15
--

CREATE TABLE public.listings (
    _id integer NOT NULL,
    product_name character varying,
    price integer,
    quantity integer,
    category character varying,
    seller_id bigint NOT NULL,
    img_url character varying
);


ALTER TABLE public.listings OWNER TO djsong15;

--
-- Name: listings__id_seq; Type: SEQUENCE; Schema: public; Owner: djsong15
--

CREATE SEQUENCE public.listings__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.listings__id_seq OWNER TO djsong15;

--
-- Name: listings__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: djsong15
--

ALTER SEQUENCE public.listings__id_seq OWNED BY public.listings._id;


--
-- Name: sales_items; Type: TABLE; Schema: public; Owner: djsong15
--

CREATE TABLE public.sales_items (
    transaction_id bigint NOT NULL,
    listing_id bigint NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.sales_items OWNER TO djsong15;

--
-- Name: transactions; Type: TABLE; Schema: public; Owner: djsong15
--

CREATE TABLE public.transactions (
    _id integer NOT NULL,
    date date DEFAULT CURRENT_DATE NOT NULL,
    sale_total integer NOT NULL
);


ALTER TABLE public.transactions OWNER TO djsong15;

--
-- Name: transactions__id_seq; Type: SEQUENCE; Schema: public; Owner: djsong15
--

CREATE SEQUENCE public.transactions__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transactions__id_seq OWNER TO djsong15;

--
-- Name: transactions__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: djsong15
--

ALTER SEQUENCE public.transactions__id_seq OWNED BY public.transactions._id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: djsong15
--

CREATE TABLE public.users (
    _id integer NOT NULL,
    username character varying NOT NULL,
    pw character varying NOT NULL,
    email character varying NOT NULL,
    last_name character varying,
    first_name character varying,
    address character varying NOT NULL,
    city character varying NOT NULL,
    state character varying NOT NULL,
    zip integer NOT NULL,
    phone integer
);


ALTER TABLE public.users OWNER TO djsong15;

--
-- Name: users__id_seq; Type: SEQUENCE; Schema: public; Owner: djsong15
--

CREATE SEQUENCE public.users__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users__id_seq OWNER TO djsong15;

--
-- Name: users__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: djsong15
--

ALTER SEQUENCE public.users__id_seq OWNED BY public.users._id;


--
-- Name: listings _id; Type: DEFAULT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.listings ALTER COLUMN _id SET DEFAULT nextval('public.listings__id_seq'::regclass);


--
-- Name: transactions _id; Type: DEFAULT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.transactions ALTER COLUMN _id SET DEFAULT nextval('public.transactions__id_seq'::regclass);


--
-- Name: users _id; Type: DEFAULT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.users ALTER COLUMN _id SET DEFAULT nextval('public.users__id_seq'::regclass);


--
-- Name: listings listings_pkey; Type: CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_pkey PRIMARY KEY (_id);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (_id);


--
-- Name: buyers buyers_transaction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.buyers
    ADD CONSTRAINT buyers_transaction_id_fkey FOREIGN KEY (transaction_id) REFERENCES public.transactions(_id);


--
-- Name: buyers buyers_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.buyers
    ADD CONSTRAINT buyers_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(_id);


--
-- Name: carts fk_listing; Type: FK CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT fk_listing FOREIGN KEY (listing_id) REFERENCES public.listings(_id);


--
-- Name: carts fk_user; Type: FK CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(_id);


--
-- Name: listings listings_seller_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.users(_id);


--
-- Name: sales_items sales_items_listing_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.sales_items
    ADD CONSTRAINT sales_items_listing_id_fkey FOREIGN KEY (listing_id) REFERENCES public.listings(_id);


--
-- Name: sales_items sales_items_transaction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: djsong15
--

ALTER TABLE ONLY public.sales_items
    ADD CONSTRAINT sales_items_transaction_id_fkey FOREIGN KEY (transaction_id) REFERENCES public.transactions(_id);


--
-- PostgreSQL database dump complete
--

