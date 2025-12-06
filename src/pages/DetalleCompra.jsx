   {/* RESUMEN DE COMPRA */}
                <Col md={4}>
                    <Card className="p-4" style={{ border: "1px solid #ccc" }}>
                        <h4>Total : {total}</h4>

                        <p className="mt-3">Método de pago</p>

                        <div className="d-flex gap-2 mb-4">
                            <Button variant="outline-secondary">Transferencia</Button>
                            <Button variant="outline-secondary">Débito/Crédito</Button>
                        </div>

                        <Button variant="primary" className="w-100">
                            Pagar
                        </Button>
                    </Card>
                </Col>

            </Row>
        </Container>